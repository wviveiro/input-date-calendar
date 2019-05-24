import generateCalendar from './calendar';

const months = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const weekdays = ['', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const btnfinish = 'SELECIONAR';
const hasErrorButton = 'DATA INVÁLIDA';

const Calendar = generateCalendar({
    months,
    weekdays,
    btnfinish,
    hasErrorButton,
})

export default Calendar;