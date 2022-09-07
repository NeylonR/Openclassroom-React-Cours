import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/color';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1em 2em;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 250px;
    height: 200px;
    transition: 200ms;
    font-size: 20px;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const CardLabel = styled.span`
    align-self: start;
    color: ${colors.primary};
    font-weight: bold;
`;
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
export default function Card({label, title, picture}){
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80}/>
            <span>{title}</span>
        </CardWrapper>
    )
};

Card.propTypes ={
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps ={
    label: '',
    title: '',
    picture: DefaultPicture,
};