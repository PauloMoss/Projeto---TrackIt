
import {Input} from '../Login_SignUp/Styles';
import { Container, Weekdays, Days, Settings } from './Styles'

export default function NewHabitConfig(props) {

    const { setMyHabit, sendHabit,setCreateHabit } = props
    const { buttonStatus, myHabit } = props
    const { status, isDisabled} = buttonStatus;
    const daysOfWeek = ['D','S','T','Q','Q','S','S'];
    const { name, days } = myHabit

    function updateHabit(i) {
        if (isDisabled) return;
        let newDays;
        if(days.includes(i)) {
            newDays = days.filter(d => d !== i);
        } else {
            newDays = [...days, i];
        }
        setMyHabit({...myHabit, days: newDays})
    }

    return(
        <Container>
            <Input type="text" placeholder="nome do hábito" value={name} disabled={isDisabled} color={isDisabled ? '#F2F2F2' : '#FFFFFF'} onChange={e => setMyHabit({...myHabit, name: e.target.value})}/>
            <Weekdays>
                {daysOfWeek.map((d,i) => <Days key={i} color={days.includes(i) ? '#CFCFCF' : '#fff'} onClick={() => updateHabit(i)} > {d} </Days>)}
            </Weekdays>
            <Settings>
                <span onClick={() => setCreateHabit(false)}>Cancelar</span>
                <button onClick={sendHabit}>{status}</button>
            </Settings>
        </Container>
    );
}