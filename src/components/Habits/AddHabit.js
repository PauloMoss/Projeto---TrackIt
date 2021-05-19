import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import Loader from "react-loader-spinner";

import styled from 'styled-components';
import {Input} from '../Generic/Styles';

export default function AddHabit({createHabit, setCreateHabit}) {

    const { userProfile } = useContext(UserContext);
    const [myHabit, setMyHabit] = useState({name: "", days: []})
    const [buttonStatus, setButtonStatus] = useState({ status:"Salvar", isDisabled: false});
    const { name, days } = myHabit
    const daysOfWeek = ['D','S','T','Q','Q','S','S'];
    const { status, isDisabled } = buttonStatus;

    function updateHabit(i) {
        let newDays;
        if(days.includes(i)) {
            newDays = days.filter(d => d !== i);
        } else {
            newDays = [...days, i];
        }
        setMyHabit({...myHabit, days: newDays})
    }
    function sendHabit() {
        setButtonStatus({status:<Loader type="ThreeDots" color="#FFFFFF" height={22} width={80}/>, isDisabled: true});
        const config = {
            headers: {
                Authorization: `Bearer ${userProfile.token}`
            }
        }
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', myHabit, config);
        request.then(r => {
            setCreateHabit(false);
            setButtonStatus({status:"Salvar", isDisabled: false});
        });
        request.catch(()=> {
            alert("Ocorreu um erro.")
            setButtonStatus({status:"Salvar", isDisabled: false});
        })
    }

    const newHabits = (
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
    )

    return(
        <>
            <MyHabits>
                <span>Meus Habitos</span>
                <Button onClick={() => (createHabit) ? setCreateHabit(false) : setCreateHabit(true)}><ion-icon name="add-sharp"></ion-icon></Button>
            </MyHabits>
            {createHabit ? newHabits : ""}
        </>
    );
}

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
background: #333;
border-radius: 5px;
margin: 10px auto;

    input {
        width: 90%;
        margin: 10px auto;
    }
    ion-icon {
        color: #666;
        font-size: 18px;
        position: absolute;
        top: 8px;
        right: 8px;
    }
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

const Settings = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
width: 90%;
margin: 15px 0 15px 0;

    button {
        background: #52B6FF;
        border-radius: 5px;
        padding: 8px 18px;
        margin-left: 25px;
        font-size: 16px;
        color:#fff;
    }
    span {
        font-size: 16px;
        color: #52B6FF;
    }
`;

const MyHabits = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
margin-bottom: 30px;
`;
const Button = styled.button`
    background: #52B6FF;
    border-radius: 5px;
    padding: 4px 6px 0 6px;
    margin-left: 25px;
    font-size: 16px;
    ion-icon {
        color: #fff;
        font-size: 27px;
        margin: 0;
    }`