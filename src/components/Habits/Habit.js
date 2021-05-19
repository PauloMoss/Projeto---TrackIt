import styled from 'styled-components';


export default function Habit() {
    const daysOfWeek = ['D','S','T','Q','Q','S','S']
    return(
        <Container>
            <MyHabitsTitle>Ler 1 livro</MyHabitsTitle>
            <Weekdays>
                {daysOfWeek.map((d,i) => <div key={i}> {d} </div>)}
            </Weekdays>
            <ion-icon name="trash-sharp"></ion-icon>
        </Container>
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
const MyHabitsTitle = styled.span`
width: 75%;
margin: 15px;
`;
const Weekdays = styled.div`
display: flex;
justify-content: flex-start;
width: 75%;
margin: 0 0 15px 15px;
    div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 8px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    }
`;