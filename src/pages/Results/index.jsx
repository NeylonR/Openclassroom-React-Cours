import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Loader } from '../../utils/style/Atoms.jsx';
import { SurveyContext } from '../../utils/context/index.jsx';

export default function Results() {
    const { answers } = useContext(SurveyContext);
    console.log(answers[2]);
    return (
        <div>
            <h1>Résultats</h1>
            <p>Vos réponses :</p>
            <ul>
                {Object.entries(answers).map((answer, index) => (
                    <ol key={answer}>Question n°{index + 1} : {answers[index +1] ? 'Vrai' : 'Faux'}</ol>
                ))}
            </ul>
        </div>
    );
};