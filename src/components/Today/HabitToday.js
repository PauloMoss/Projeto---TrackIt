
import { Container, MyHabitsTitle, Weekdays, FinishedHabits } from './Styles';

export default function HabitToday() {
    return(
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
    );
}