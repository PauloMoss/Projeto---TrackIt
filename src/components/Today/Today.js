import styled from 'styled-components';
import Header from '../Header_NavBar/Header';
import NavBar from '../Header_NavBar/NavBar';

export default function Today() {
    
    return(
        <>
            <Header />
            <Date>
                <h2>Segunda, 17/05</h2>
                <span>Nenhum hábito concluído ainda</span>
            </Date>

            <Container>
                <MyHabitsTitle>Ler 1 capítulo de livro</MyHabitsTitle>
                <Weekdays>
                    Sequência atual: 3 dias <br/>
                    Seu recorde: 5 dias
                </Weekdays>
                <FinishedHabits>
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </FinishedHabits>
            </Container>
            
            <NavBar />
        </>
    );
}

const Date = styled.div`
display: flex;
flex-direction: column;
margin-top: 100px;
margin-bottom: 30px;
font-size: 18px;
color: #BABABA;
    h2 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 10px;
    }
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
background: #8FC549;
border-radius: 5px;
    ion-icon {
        font-size:35px;
    }
`;