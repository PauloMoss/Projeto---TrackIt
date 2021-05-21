import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.color};
        font-family: 'Lexend Deca', sans-serif;
    }

    .habitComplete{
        background: green;
    }
    .habitIncomplete{
        background: red;
    }
    .wednesday {
        background: black;
    }
`;

export default GlobalStyle;