import logo from '../../assets/404.svg';
import styled from 'styled-components';
import colors from '../../utils/style/color';

const DivBg = styled.div`
    background-color: ${colors.backgroundLight};
    padding: 2em 0;
    p{
        font-size: 24px;
        font-weight: bold;
        padding: 1em 0;
    }
`;
export default function Error() {
    return (
        <DivBg>
            <p>Oups</p>
            <img src={logo} alt='Logo page Error 404' />
            <p>Il semblerait qu'il y ai un problème</p>
        </DivBg>
    )
}
 