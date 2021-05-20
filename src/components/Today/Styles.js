import styled from 'styled-components';

const DateToday = styled.div`
display: flex;
flex-direction: column;
margin-top: 100px;
margin-bottom: 10px;
font-size: 23px;
color: #126BA5;
`;
const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
background: #FFFFFF;
border-radius: 5px;
margin: 10px auto;
color: #666666;
`;
const MyHabitsTitle = styled.span`
width: 70%;
margin: 15px 0 15px 15px;
`;
const Weekdays = styled.div`
display: flex;
flex-direction: column;
width: 70%;
margin: 0 0 15px 15px;
font-size: 13px;
color: #666;
`;

const FinishedHabits = styled.div`
position: absolute;
top: calc(50% - 34px);
right: 8px;
display: flex;
justify-content: center;
align-items: center;

width: 69px;
height: 69px;
background: ${props => props.color};
border-radius: 5px;
    ion-icon {
        font-size:35px;
        color: #FFFFFF;
    }
`;
const DaysChecked = styled.div`

    & > span {
        color: ${props => props.color};
    }
`;

const HabitDayStatus = styled.span`
color: ${props => props.color};
`;

export { DateToday, Container, MyHabitsTitle, Weekdays, FinishedHabits, HabitDayStatus, DaysChecked };