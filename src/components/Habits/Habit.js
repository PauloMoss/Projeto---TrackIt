import { useContext } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import HabitContext from '../../contexts/HabitContext';
import { Container, Weekdays, Days, MyHabitsTitle } from './Styles'

export default function Habit({habit}) {

    const { userProfile } = useContext(UserContext);
    const { setHabitsList } = useContext(HabitContext);
    const { id, name, days } = habit;
    const daysOfWeek = ['D','S','T','Q','Q','S','S'];

    function deleteHabit() {
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const data = { data: habit}
        const deleteHabit = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config, data);
        deleteHabit.then(r => {
            const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
            request.then(r => setHabitsList(r.data));
            request.catch(()=> alert("Ocorreu um erro ao carregar a lista de habitos."))
        })
        deleteHabit.catch(() => alert("Ocorreu um erro ao deletar o habito."))
    }

    return(
        <Container>
            <MyHabitsTitle>{name}</MyHabitsTitle>
            <Weekdays>
                {daysOfWeek.map((d,i) => <Days key={i} color={days.includes(i) ? '#CFCFCF' : '#fff'}> {d} </Days>)}
            </Weekdays>
            <ion-icon name="trash-sharp" onClick={deleteHabit}></ion-icon>
        </Container>
    );
}