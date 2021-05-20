import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {BottomBar} from './Styles';

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

