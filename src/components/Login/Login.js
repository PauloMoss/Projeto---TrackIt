import { Link,useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Loader from "react-loader-spinner";
import axios from 'axios';

import trackit from "../../assets/Trackit.png";
import {Container, Input, Button} from '../Generic/Styles';
import styled from 'styled-components';


export default function Login() {

    const history = useHistory();
    const { setUserProfile } = useContext(UserContext);
    const [user, setUser] = useState({ email: "", password: "" });
    const [buttonStatus, setButtonStatus] = useState({ status:"Entrar", alert: ""});
    const { email, password } = user

    function handleOnChange(e, objKey) {
        setUser({...user, [objKey]: e.target.value})
    }
    function userLogIn() {

        setButtonStatus({status:<Loader type="ThreeDots" color="#FFFFFF" height={22} width={80}/>, alert: ""});

        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, user);
        request.then((r) => {
            history.push("/hoje");
            setUserProfile(r.data)
        })
        request.catch(erro => {
            setButtonStatus({ status:"Entrar", alert: <UserAlert>Usuario ou senha invalida</UserAlert>});
        })
        setUser({ email: "", password: "" });
        
    }
    return(
        <Container>
            <img src={trackit} alt="TrackIt"/>
            <Input type="text" placeholder="Email" value={email} onChange={e => handleOnChange(e, "email")}/>
            <Input type="password" placeholder="Password" value={password} onChange={e => handleOnChange(e, "password")}/>
            <Button onClick={userLogIn}>
                {buttonStatus.status}
            </Button>
            <Link to= "/cadastro" ><span>Não tem uma conta? Cadastre-se!</span></Link>
            {buttonStatus.alert}
        </Container>
        
    );
}
const UserAlert = styled.div`
    margin-top: 10px;
    color: #ff0000;
`;