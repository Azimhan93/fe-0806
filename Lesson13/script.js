function renderCalendar(month, year, calendarElement) {

    const monthName = renderCalendar.MONTHES[month];

    const title = `${monthName} ${year}`;

    calendarElement.querySelector('.calendar_data-title').innerHTML = title;

    const firstDayOfMonth = new Date();

    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setMonth(month);
    firstDayOfMonth.setFullYear(year);

    const firstWeekDayOfMonth = firstDayOfMonth.getDay();
    const firstRenderDay = new Date(firstDayOfMonth);
    const firstDayShift = firstWeekDayOfMonth === 0 ? 6 : firstWeekDayOfMonth - 1;

    firstRenderDay.setDate(firstRenderDay.getDate() - firstDayShift);

    const lastDayOfMonth = new Date(firstDayOfMonth);

    lastDayOfMonth.setMonth(month + 1);
    lastDayOfMonth.setDate(0);

    const lastWeekDayOfMonth = lastDayOfMonth.getDay();
    const lastRenderDay = new Date(lastDayOfMonth);
    const lastDayShift = (7 - lastWeekDayOfMonth) % 7;

    lastRenderDay.setDate(lastRenderDay.getDate() + lastDayShift);

    const days = [];

    for (
        const renderDay = new Date(firstRenderDay);
        renderDay <= lastRenderDay;
        renderDay.setDate(renderDay.getDate() + 1)
    ) {
        const dayEl = document.createElement('li');


        dayEl.className = 'calendar__day';

        if (renderDay.getMonth() !== month) {
            dayEl.classList.add('calendar__day--not-in-month');
        }

        const link = document.createElement('a');

        link.href =`?day=${renderDay.toJSON()}`;
        link.innerText = renderDay.getDate();

        dayEl.append(link);
        
        days.push(dayEl);
    }
        const daysContainer = calendarElement.querySelector('.calendar_data-week-ul');

        daysContainer.innerText = '';

        daysContainer.append( ...days );
}


renderCalendar.MONTHES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const calendarElement = document.querySelector('.calendar');
let currentDay = new Date();

renderCalendar( currentDay.getMonth(), currentDay.getFullYear(), calendarElement );
