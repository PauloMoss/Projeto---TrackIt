import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
background: #FFF;
margin: 0 auto;

img {
    margin-top: 70px;
    margin-bottom: 40px;
}

button {
    margin-bottom: 25px;
}
span {
    color:#52B6FF;
}
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 6px 0;
    background-color: ${props => props.color};
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
`;
const UserAlert = styled.div`
    margin-top: 10px;
    color: #ff0000;
`;

export {Container, Input, Button, UserAlert};