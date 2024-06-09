document.addEventListener('DOMContentLoaded', function () {
  const monthYearDisplay = document.getElementById('monthYear');
  const calendarDays = document.getElementById('calendar-days');
  const prevMonthBtn = document.getElementById('prevMonth');
  const nextMonthBtn = document.getElementById('nextMonth');

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  function renderCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();
    const days = [];

    calendarDays.innerHTML = '';

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(prevLastDate - i);
    }

    // Current month's days
    for (let i = 1; i <= lastDate; i++) {
      days.push(i);
    }

    // Create calendar days
    days.forEach((day, index) => {
      const dayElement = document.createElement('div');
      dayElement.textContent = day;
      if (index < firstDay) {
        dayElement.classList.add('prev-month');
      } else if (index >= firstDay + lastDate) {
        dayElement.classList.add('next-month');
      } else {
        dayElement.classList.add('current-month');
      }
      calendarDays.appendChild(dayElement);
    });

    // Update month and year display
    monthYearDisplay.textContent = `${new Date(year, month).toLocaleString(
      'default',
      { month: 'long' }
    )} ${year}`;
  }

  prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });

  renderCalendar(currentMonth, currentYear);
});
