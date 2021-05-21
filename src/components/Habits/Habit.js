import { useContext } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
        confirmAlert({
            title: 'Apagar habito',
            message: 'Gostaria realmente de deletar esse habito?',
            buttons: [
                {label: 'Sim', onClick: () => {
                    const deleteHabit = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config, data);
                    deleteHabit.then(r => {
                        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
                        request.then(r => setHabitsList(r.data));
                        request.catch(()=> alert("Ocorreu um erro ao carregar a lista de habitos."));
                    })
                    deleteHabit.catch(() => alert("Ocorreu um erro ao deletar o habito."))
                    }
                },
                {label: 'Nao', onClick: () => {}}
            ]
        });
    }

    return(
        <Container>
            <MyHabitsTitle>{name}</MyHabitsTitle>
            <Weekdays>
                {daysOfWeek.map((d,i) => <Days key={i} background={days.includes(i) ? '#CFCFCF' : '#fff'} color={days.includes(i) ? '#fff' : '#DBDBDB'}> {d} </Days>)}
            </Weekdays>
            <ion-icon name="trash-sharp" onClick={deleteHabit}></ion-icon>
        </Container>
    );
}

/**/