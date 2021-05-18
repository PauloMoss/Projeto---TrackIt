import styled from 'styled-components';


export default function NavBar() {
    return(
        <BottomBar>
            <span>Habitos</span>
            <span>Historico</span>
        </BottomBar>
    );
}

const BottomBar = styled.div`
position: fixed;
bottom: 0;
right:0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
background: #fff;

    span {
        color: #52B6FF;
        font-size: 18px;
    }
`