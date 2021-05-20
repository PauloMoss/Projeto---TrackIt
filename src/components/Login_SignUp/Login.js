import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import Loader from "react-loader-spinner";
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import trackit from "../../assets/Trackit.png";
import { Container, Input, Button, UserAlert } from './Styles';
import GlobalStyle from '../../styles/GlobalStyles';

export default function Login() {

    const history = useHistory();
    const { setUserProfile } = useContext(UserContext);
    const [user, setUser] = useState({ email: "", password: "" });
    const [buttonStatus, setButtonStatus] = useState({ status:"Entrar", userAlert: "", isDisabled: false});

    const { email, password } = user
    const { status, userAlert, isDisabled } = buttonStatus;

    function handleOnChange(e, objKey) {
        setUser({...user, [objKey]: e.target.value})
    }
    
    function userLogIn(event) {
        event.preventDefault();
        setButtonStatus({status:<Loader type="ThreeDots" color="#FFFFFF" height={22} width={80}/>, userAlert: "", isDisabled: true});
        
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, user);
        request.then((r) => {
            setUserProfile(r.data)
            history.push("/hoje");
        })
        request.catch(erro => {
            setButtonStatus({ status:"Entrar", userAlert: <UserAlert>Usuario ou senha invalida</UserAlert>, isDisabled: false});
        })
        setUser({ email: "", password: "" });
        
    }
    return(
        <>
            <GlobalStyle color={'#FFFFFF'}/>
            <Container>
                <img src={trackit} alt="TrackIt"/>
                <form onSubmit={userLogIn}>
                    <Input type="email" placeholder="Email" value={email} required disabled={isDisabled} color={isDisabled ? '#F2F2F2' : '#FFFFFF'} onChange={e => handleOnChange(e, "email")}/>
                    <Input type="password" placeholder="Password" value={password} required disabled={isDisabled} color={isDisabled ? '#F2F2F2' : '#FFFFFF'} onChange={e => handleOnChange(e, "password")} />
                    <Button type="submit">{status}</Button>
                </form>
                <Link to= "/cadastro" ><span>Não tem uma conta? Cadastre-se!</span></Link>
                {userAlert}
            </Container>
        </>
    );
}