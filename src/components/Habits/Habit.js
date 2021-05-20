import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import HabitContext from '../../contexts/HabitContext';
import axios from 'axios';

import styled from 'styled-components';


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
            request.catch(()=> alert("Ocorreu um erro."))
        })
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

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
background: #FFF;
border-radius: 5px;
margin: 10px auto;
color: #666666;
    ion-icon {
        color: #666;
        font-size: 18px;
        position: absolute;
        top: 8px;
        right: 8px;
    }
`;
const MyHabitsTitle = styled.span`
width: 75%;
margin: 15px;
`;
const Weekdays = styled.div`
display: flex;
justify-content: flex-start;
width: 75%;
margin: 0 0 15px 15px;
`;
const Days = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 8px;
    background-color: ${props => props.color};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
`;