import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/color.js';
import { Loader } from '../../utils/style/Atoms.jsx';
import { SurveyContext } from '../../utils/context/index.jsx';
import { useFetch } from '../../utils/hooks';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
  }
  p{
    margin: 30px;
  }
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Survey() {
  const {questionNumber} = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const { answers, saveAnswers } = useContext(SurveyContext);
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
  const surveyData = data?.surveyData;

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  };
  


  if(error) return <h1>Une erreur est survenue, recharger la page.</h1>;

  return (
    <SurveyContainer>
      <h1>Question n°{questionNumberInt}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <p>{surveyData[questionNumber]}</p>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        {questionNumberInt !== 1 && (
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>)}
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
};