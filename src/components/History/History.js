import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import {MyHabitsCalendar} from './Styles';
import Header from '../Header_Menu/Header';
import Menu from '../Header_Menu/Menu';

export default function History() {

    const { userProfile } = useContext(UserContext);
    const [habitsHistory, setHabitsHistory] = useState(null);

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

    return(
        <>
            <Header />
            <MyHabitsCalendar>
                <Calendar />
            </MyHabitsCalendar>
            <Menu />
        </>
    );
}