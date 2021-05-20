import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import Date from './Date';
import HabitToday from './HabitToday';
import Header from '../Header_Menu/Header';
import NavBar from '../Header_Menu/Menu';

export default function Today() {
    
    const { userProfile } = useContext(UserContext);
    const [habitsToday, setHabitsToday] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        request.then(r => setHabitsToday(r.data));
        request.catch(()=> alert("Ocorreu um erro."))
    },[userProfile.token]
    );

    return(
        <>
            <Header />
            <Date />
            
            {habitsToday !== null ? ((habitsToday.length !== 0) ? habitsToday.map((h) => <HabitToday key={h.id} habit={h} />) : "Nenhum Habito Hoje") : "carregando"}

            <NavBar />
        </>
    );
}