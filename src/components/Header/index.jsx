import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/color";
import logo from "../../assets/dark-logo.png";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
`;

export default function Header(){
    return (
        <HeaderDiv>
            <img src={logo} alt='Logo Shiny Company'/>
                <nav>
                    <StyledLink to='/'>Accueil</StyledLink>
                    <StyledLink to='/freelances'>Profils</StyledLink>
                    <StyledLink to='/survey/1' $isFullLink>Faire le test</StyledLink>
                </nav>
        </HeaderDiv>
    );
};