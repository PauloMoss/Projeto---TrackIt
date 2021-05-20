import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.color};
        font-family: 'Lexend Deca', sans-serif;
    }
`;

export default GlobalStyle;