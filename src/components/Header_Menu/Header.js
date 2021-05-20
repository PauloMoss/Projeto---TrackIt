import { useContext } from 'react';

import {TopBar} from './Styles';
import UserContext from '../../contexts/UserContext';

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