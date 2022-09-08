import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import DefaultPicture from '../../assets/profile.png';

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
`;
const CardLabel = styled.span`
  align-self: start;
  color: ${colors.primary};
  font-weight: bold;
`;
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
export default function Card({ label, title, picture }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const star = isFavorite ? '⭐️' : '';

  return (
    <CardWrapper
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
    >
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <h4>{star}{title}{star}</h4>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
};
