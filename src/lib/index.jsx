import generateCalendar from './calendar';

const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const btnfinish = 'DONE';
const hasErrorButton = 'INVALID DATE';

const Calendar = generateCalendar({
    months,
    weekdays,
    btnfinish,
    hasErrorButton,
})

export default Calendar;