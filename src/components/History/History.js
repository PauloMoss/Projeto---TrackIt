import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GlobalStyle from '../../styles/GlobalStyles';

import UserContext from '../../contexts/UserContext';
import {MyHabitsCalendar, TileContent} from './Styles';
import Header from '../Header_Menu/Header';
import Menu from '../Header_Menu/Menu';

export default function History() {

    const { userProfile } = useContext(UserContext);
    const [habitsHistory, setHabitsHistory] = useState(null);
    const locale = 'pt-bt'; 

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',config);
        request.then(r => {
            setHabitsHistory(r.data);
        });
        request.catch(()=> alert("Ocorreu um erro."))
    },[userProfile.token]
    );

    const arrayOfDays = habitsHistory && habitsHistory.map(h => h.day)
    const arrayOfDone = habitsHistory && habitsHistory.map(h => h.habits.reduce((acc,item) => acc && item.done, true))
    
    let finalArray = []
    arrayOfDays && arrayOfDays.forEach(a => finalArray.push({day: a}))
    arrayOfDone && arrayOfDone.forEach((a, i) => finalArray[i] = {...finalArray[i], done: a})
    console.log(finalArray)
    
    return(
        <>
            <GlobalStyle/>
            <Header />
            <MyHabitsCalendar>
                <Calendar 
                showNeighboringMonth={false}
                formatDay ={(locale, date) => dayjs(date).format('DD')}
                formatLongDate={(locale, date) => dayjs(date).format('DD/MM/YYYY')}
                tileClassName={({ activeStartDate, date }) => finalArray && finalArray.forEach(f => f.day === (dayjs(date).format('DD/MM/YYYY')) && f.done ? 'habitComplete' : 'habitIncomplete') }
                />
            </MyHabitsCalendar>
            <Menu />
        </>
    );
}