import dayjs from 'dayjs';
import { DateToday } from './Styles';

export default function Date() {
    
    const allWeekDays = [
        'Domingo',
        'Segunda-Feira',
        'Terca-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sabado'
    ]
    const date = {weekday: dayjs().$W, day: dayjs().$D, month:dayjs().$M + 1};
    const dateDisplay = `${allWeekDays[date.weekday]} - ${date.day}/${(date.month < 10) ? (`0${date.month}`) : (date.month)}`

    return(
        <DateToday>{dateDisplay}</DateToday>
    );
}