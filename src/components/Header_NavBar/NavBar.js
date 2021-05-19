import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import styled from 'styled-components';


export default function NavBar() {
    return(
        <BottomBar>
            <Link to= "/habitos"><span>Habitos</span></Link>
            <Link to= "/hoje"><div style={{ width: 91, height: 91 }}>
                <CircularProgressbar
                    value={50}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
            </div></Link>
            <Link to= "/historico"><span>Historico</span></Link>
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