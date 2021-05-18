import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import trackit from "../../assets/Trackit.png";
import {Container, Input, Button} from '../Generic/Styles';

export default function SignUp() {
    const history = useHistory();
    const [userData, setUserData] = useState({ email: "", name: "", image: "", password: "" });
    const { email, name, image, password } = userData

    function handleOnChange(e, objKey) {
        setUserData({...userData, [objKey]: e.target.value})
    }

    function userSignUp() {
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", userData);
        request.then(() => history.push("/"));
        request.catch(e => alert("Por favor, verifique os dados e tente novamente."))
        setUserData({ email: "", name: "", image: "", password: "" });
    }
    
    return(
        <Container>
            <img src={trackit} alt="TrackIt"/>
            <Input type="text" placeholder="Email" value={email} onChange={e => handleOnChange(e, "email")}/>
            <Input type="password" placeholder="Password" value={password} onChange={e => handleOnChange(e, "password")}/>
            <Input type="text" placeholder="Nome" value={name} onChange={e => handleOnChange(e, "name")}/>
            <Input type="text" placeholder="URL da Foto" value={image} onChange={e => handleOnChange(e, "image")}/>
            <Button onClick={userSignUp} >Cadastrar</Button>
            <Link to="/" ><span>Já tem uma conta? Faça login!</span></Link>
        </Container>
    );
}