import styled from 'styled-components';

const TopBar = styled.div`
position: fixed;
top: 0;
right:0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
padding: 0 20px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
font-family: 'Playball', cursive;
font-size: 40px;
color: #FFFFFF;

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        object-fit: cover;
        background-color: #fff;
    }
`
const BottomBar = styled.div`
position: fixed;
bottom: 0;
right:0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
padding: 0 20px;
background: #fff;

    span {
        color: #52B6FF;
        font-size: 18px;
    }
    div {
        position: absolute;
        bottom: 10px;
        left: calc(50% - 45px);
    }
`

export { BottomBar, TopBar };