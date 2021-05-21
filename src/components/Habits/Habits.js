import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

import UserContext from '../../contexts/UserContext';
import HabitContext from '../../contexts/HabitContext';
import Header from '../Header_Menu/Header';
import Menu from '../Header_Menu/Menu';
import Habit from './Habit';
import AddHabit from './AddHabit';
import { NoHabitsYet } from './Styles'

export default function Habtis() {
    
    const { userProfile } = useContext(UserContext);
    const [habitsList, setHabitsList] = useState(null);
    const [createHabit, setCreateHabit] = useState(false);
    const loading = <Loader type="ThreeDots" color="#FFFFFF" height={19} width={50}/>

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        request.then(r => setHabitsList(r.data));
        request.catch(()=> alert("Ocorreu um erro ao carregar seus habitos."))
    },[userProfile.token]
    );

    const noHabitsYet = <NoHabitsYet> Voce não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsYet>
    
    return(
        <HabitContext.Provider value={{habitsList, setHabitsList}}>
            <Header />
            <AddHabit createHabit={createHabit} setCreateHabit={setCreateHabit} loading={loading}/>
            
            {habitsList !== null ? ((habitsList.length !== 0) ? habitsList.map( h => <Habit key={h.id} habit={h} />) : noHabitsYet) : loading}

            <Menu />
        </HabitContext.Provider>
    );
}