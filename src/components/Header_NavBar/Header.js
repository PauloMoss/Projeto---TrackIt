import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

export default function Header() {

    const { userProfile } = useContext(UserContext);
    if(userProfile){
        return(
            <TopBar>
                <span>TrackIt</span>
                <img src={userProfile.image} alt={userProfile.name} />
            </TopBar>
        );
    } else{
        return "Carregando..";
    }
}

const TopBar = styled.div`
position: fixed;
top: 0;
right:0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
font-family: 'Playball', cursive;
font-size: 40px;
color: #FFFFFF;

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        background-color: #fff;
    }
`