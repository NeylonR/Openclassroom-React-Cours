import React from 'react';
import ReactDOM from 'react-dom/client';
import Survey from './pages/Survey/index.jsx';
import Home from './pages/Home/index.jsx';
import Header from './components/Header/index.jsx';
import Error from './components/Error/index.jsx';
import Freelances from './pages/Freelances/index.jsx';
import Results from './pages/Results/index.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        font-size: 16px;
        padding: 0 2em;
        text-align:center;
    }
    *{
      margin: 0;
      padding:0;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/survey/:questionNumber" element={<Survey />}/>
        <Route path="/results" element ={<Results />}/>
        <Route path="/freelances" element ={<Freelances />}/>
        <Route path={'*'} element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
