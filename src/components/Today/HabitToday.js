import { useContext } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import PercentageContext from '../../contexts/PercentageContext';
import { Container, MyHabitsTitle, Weekdays, FinishedHabits, DaysChecked } from './Styles';

export default function HabitToday({habitToday, setHabitsToday, habitsToday, index}) {

    const { userProfile } = useContext(UserContext);
    const { id, name, done, currentSequence, highestSequence } = habitToday;
    const { setTodayPercentage } = useContext(PercentageContext);

    function checkHabit() {
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const newHabitsToday = [...habitsToday];
        if(!done){
            const check = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, habitToday, config);
            check.then(r => {
                newHabitsToday[index] = {...newHabitsToday[index], done: true, currentSequence: currentSequence + 1};
                if(currentSequence === highestSequence) {newHabitsToday[index] = {...newHabitsToday[index], highestSequence: highestSequence + 1};}
                setHabitsToday(newHabitsToday);
                setTodayPercentage( (newHabitsToday.length > 0) ? newHabitsToday.filter(h => h && h.done).length/newHabitsToday.length : 0  );
            })
            check.catch(() => alert("Ocorreu um erro ao dar check."))
        } else {
            const check = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, habitToday, config);
            check.then(r => {
                newHabitsToday[index] = {...newHabitsToday[index], done: false, currentSequence: currentSequence - 1}
                setHabitsToday(newHabitsToday);
                setTodayPercentage( (newHabitsToday.length > 0) ? newHabitsToday.filter(h => h && h.done).length/newHabitsToday.length : 0  );
            })
            check.catch(() => alert("Ocorreu um erro ao dar check."))
        }
        
    }

    return(
        <Container>
            <MyHabitsTitle>{name}</MyHabitsTitle>
            <Weekdays>
                <DaysChecked color = {done ? "#8FC549" : '#E5E5E5'}>Sequência atual: <span>{currentSequence} dias</span></DaysChecked>
                <DaysChecked color = {(currentSequence >= highestSequence && highestSequence > 0) ? "#8FC549" : '#E5E5E5'} >Seu recorde: <span>{highestSequence} dias</span></DaysChecked>
            </Weekdays>
            <FinishedHabits color={done ? "#8FC549" : '#E5E5E5'} onClick={checkHabit}>
                <ion-icon name="checkmark-sharp"></ion-icon>
            </FinishedHabits>
        </Container>
    );
}