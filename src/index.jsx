import React from 'react';
import ReactDOM from 'react-dom/client';
import Survey from './pages/Survey/index.jsx';
import Home from './pages/Home/index.jsx';
import Header from './components/Header/index.jsx';
import Error from './components/Error/index.jsx';
import Freelances from './pages/Freelances/index.jsx';
import Results from './pages/Results/index.jsx';
import Footer from './components/Footer/index.jsx';
import GlobalStyle from './utils/style/GlobalStyle.jsx';
import { ThemeProvider, SurveyProvider } from './utils/context/index.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle/>
      <Router>
        <Header />
        <SurveyProvider>
          <Routes>
            <Route path="/" element={<Home />}/>  
            <Route path="/survey/:questionNumber" element={<Survey />}/>
            <Route path="/results" element ={<Results />}/>
            <Route path="/freelances" element ={<Freelances />}/>
            <Route path={'*'} element={<Error />}/>
          </Routes>
        </SurveyProvider>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
