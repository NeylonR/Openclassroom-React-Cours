import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/color.js';
import { Loader } from '../../utils/style/Atoms.js';

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

export default function Survey() {
  const {questionNumber} = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    async function fetchSurvey(){
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/survey`);
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
      } catch(err) {
        console.log('===== error =====', err)
      } finally {
        setDataLoading(false);
      }
    }
    fetchSurvey();
  }, [])

  return (
    <SurveyContainer>
      <h1>Question n°{questionNumberInt}</h1>
      {isDataLoading ? (
        <Loader />
      ) : (
        <p>{surveyData[questionNumber]}</p>
      )}
      <LinkWrapper>
        {questionNumberInt !== 1 && (
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>)}
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
};