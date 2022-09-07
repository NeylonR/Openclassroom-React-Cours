import { useContext } from 'react';
import { ThemeContext } from '../context/index.jsx';
import {createGlobalStyle} from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
    }
    body {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        font-size: 16px;
        padding: 0 2em;
        text-align:center;
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    }
`

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}