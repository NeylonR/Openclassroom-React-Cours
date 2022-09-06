import { Link, useParams } from "react-router-dom";

export default function Survey() {
  const {questionNumber} = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  return (
    <div>
      <h1>Questionnaire</h1>
      <p>Question {questionNumberInt}</p>
      {questionNumberInt !== 1 && (
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>)}
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  );
};