import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

import trackit from "../../assets/Trackit.png";
import {Container, Input, Button, UserAlert, GlobalStyle} from '../Generic/Styles';

export default function SignUp() {
    const history = useHistory();
    const [userData, setUserData] = useState({ email: "", name: "", image: "", password: "" });
    const [buttonStatus, setButtonStatus] = useState({ status:"Cadastrar", userAlert: "", isDisabled: false});
    const { email, name, image, password } = userData
    const { status, userAlert, isDisabled } = buttonStatus;

    function handleOnChange(e, objKey) {
        setUserData({...userData, [objKey]: e.target.value})
    }

    function userSignUp(event) {
        event.preventDefault();
        setButtonStatus({status:<Loader type="ThreeDots" color="#FFFFFF" height={22} width={80}/>, userAlert: "", isDisabled: true});

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", userData);
        request.then(() => history.push("/"));
        request.catch(() => {
            setButtonStatus({status:"Cadastrar", userAlert: <UserAlert>Por favor, verifique os dados e tente novamente.</UserAlert>, isDisabled: false});
        })
        setUserData({ email: "", name: "", image: "", password: "" });
    }
    
    return(
        <>
            <GlobalStyle color={'#FFFFFF'}/>
            <Container>
                <img src={trackit} alt="TrackIt"/>
                <form onSubmit={userSignUp}>
                    <Input type="email" placeholder="Email" value={email} required disabled={isDisabled} color={isDisabled ? '#F2F2F2' : '#FFFFFF'} onChange={e => handleOnChange(e, "email")}/>
                    <Input type="password" placeholder="Password" value={password} required disabled={isDisabled} color={isDisabled ? '#F2F2F2' : '#FFFFFF'} onChange={e => handleOnChange(e, "password")}/>
                    <Input type="text" placeholder="Nome" value={name} required disabled={isDisabled} color={isDisabled ? '#F2F2F2' : '#FFFFFF'} onChange={e => handleOnChange(e, "name")}/>
                    <Input type="url" placeholder="URL da Foto" value={image} required disabled={isDisabled} color={isDisabled ? '#F2F2F2' : '#FFFFFF'}onChange={e => handleOnChange(e, "image")}/>
                    <Button type="submit" >{status}</Button>
                </form>
                <Link to="/" ><span>Já tem uma conta? Faça login!</span></Link>
                {userAlert}
            </Container>
        </>
    );
}