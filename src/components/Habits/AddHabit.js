import { useState, useContext } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import HabitContext from '../../contexts/HabitContext';
import NewHabitConfig from './NewHabitConfig';
import { MyHabits, Button } from './Styles';

export default function AddHabit({createHabit, setCreateHabit, loading}) {

    const { userProfile } = useContext(UserContext);
    const { setHabitsList } = useContext(HabitContext);
    const [myHabit, setMyHabit] = useState({name: "", days: []})
    const [buttonStatus, setButtonStatus] = useState({ status:"Salvar", isDisabled: false});

    function sendHabit() {
        setButtonStatus({status:loading, isDisabled: true});
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const creatNewHabit = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', myHabit, config);
        creatNewHabit.then(r => {
            const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
            request.then(r => {
                setCreateHabit(false);
                setMyHabit({name: "", days: []});
                setButtonStatus({status:"Salvar", isDisabled: false});
                setHabitsList(r.data);
            });
            request.catch(()=> alert("Ocorreu um erro ao carregar a lista de habitos."))
        });
        creatNewHabit.catch(()=> {
            alert("Ocorreu um erro ao criar o habito.")
            setButtonStatus({status:"Salvar", isDisabled: false});
        })
    }

    return(
        <>
            <MyHabits>
                <span>Meus Habitos</span>
                <Button onClick={() => (createHabit) ? setCreateHabit(false) : setCreateHabit(true)}><ion-icon name="add-sharp"></ion-icon></Button>
            </MyHabits>
            {createHabit ? <NewHabitConfig buttonStatus={buttonStatus} myHabit={myHabit} setMyHabit={setMyHabit} sendHabit={sendHabit} setCreateHabit={setCreateHabit}/> : ""}
        </>
    );
}