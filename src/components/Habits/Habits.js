import { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';

import styled from 'styled-components';
import Header from '../Header_NavBar/Header';
import NavBar from '../Header_NavBar/NavBar';
import Habit from './Habit';
import AddHabit from './AddHabit';

export default function Habtis() {
    
    const { userProfile } = useContext(UserContext);
    const [habitsList, setHabitsList] = useState([1,2]);
    const [createHabit, setCreateHabit] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        request.then(r => setHabitsList(r.data));
        request.catch(()=> alert("Ocorreu um erro."))
    },[userProfile.token]
    );

    const noHabitsYet = <NoHabitsYet> Voce não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsYet>
    console.log(habitsList)
    return(
        <>
            <Header />
            <AddHabit createHabit={createHabit} setCreateHabit={setCreateHabit}/>
            
            {habitsList === [] ? noHabitsYet : habitsList.map((h,i) => <Habit key={i} habit={h} />)}

            <NavBar />
        </>
    );
}

const NoHabitsYet = styled.div`

`;

//