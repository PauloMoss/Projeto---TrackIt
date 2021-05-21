import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PercentageContext from '../../contexts/PercentageContext';
import {BottomBar} from './Styles';

export default function Menu() {

    const { todayPercentage } = useContext(PercentageContext);

    return(
        <BottomBar>
            <Link to= "/habitos"><span>Hábitos</span></Link>
            <Link to= "/hoje"><div style={{ width: 91, height: 91 }}>
                <CircularProgressbar
                    value={todayPercentage * 100}
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
            <Link to= "/historico"><span>Histórico</span></Link>
        </BottomBar>
    );
}

