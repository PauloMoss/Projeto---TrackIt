import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from '../contexts/UserContext';
import PercentageContext from '../contexts/PercentageContext';

import GlobalStyle from '../styles/GlobalStyles';
import Login from './Login_SignUp/Login';
import SignUp from './Login_SignUp/SignUp';
import Habtis from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History/History";

export default function App() {

    const [userProfile, setUserProfile] = useState(null);
    const [todayPercentage, setTodayPercentage] = useState(0);

    return(
        <UserContext.Provider value={{userProfile, setUserProfile}}>
            <PercentageContext.Provider value={{todayPercentage, setTodayPercentage}}>
                <GlobalStyle color={'#E5E5E5'}/>
                <Router>
                    <Switch>
                        <Route exact path= "/">
                            <Login />
                        </Route>
                        <Route path= "/cadastro">
                            <SignUp />
                        </Route>
                        <Route path= "/habitos">
                            <Habtis />
                        </Route>
                        <Route path= "/hoje">
                            <Today />
                        </Route>
                        <Route path= "/historico">
                            <History />
                        </Route>
                    </Switch>
                </Router>
            </PercentageContext.Provider>
        </UserContext.Provider>
        
    );
}