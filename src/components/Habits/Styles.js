import styled from 'styled-components';

const NoHabitsYet = styled.div`

`;

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
background: #FFF;
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
const MyHabitsTitle = styled.span`
width: 75%;
margin: 15px;
color: #666666;
`;

export { NoHabitsYet, Container, Weekdays, Days, Settings, MyHabits, Button, MyHabitsTitle };
