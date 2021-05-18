import styled from 'styled-components';
import Header from '../Header_NavBar/Header';
import NavBar from '../Header_NavBar/NavBar';

export default function Habtis() {
    const daysOfWeek = ['D','S','T','Q','Q','S','S']
    return(
        <>
            <Header />
            <MyHabits>
                <span>Meus Habitos</span>
                <Button><ion-icon name="add-sharp"></ion-icon></Button>
            </MyHabits>
            
            <Container>
                <Input />
                <Weekdays>
                    {daysOfWeek.map((d,i) => <div key={i}> {d} </div>)}
                </Weekdays>
                <Settings>
                    <span>Cancelar</span>
                    <button>Salvar</button>
                </Settings>
            </Container>

            <Container>
                <MyHabitsTitle>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MyHabitsTitle>
                <Weekdays>
                    {daysOfWeek.map((d,i) => <div key={i}> {d} </div>)}
                </Weekdays>
                <ion-icon name="trash-sharp"></ion-icon>
            </Container>

            <NoHabitsYet>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabitsYet>
            
            <NavBar />
        </>
    );
}
const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 6px 0;
`;
const MyHabits = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 100px;
margin-bottom: 30px;
`;

const NoHabitsYet = styled.div`

`;
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
    }
`

//

//<ion-icon name="checkmark-sharp"></ion-icon>