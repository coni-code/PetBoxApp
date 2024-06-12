import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalConfigPage from './pages/AnimalConfigPage';
import LoginPage from './pages/LoginPage';
import './assets/styles/app.css';
import HomePage from './pages/HomePage';
import AnimalOptionChoose from './pages/AnimalOptionChoose';
import AnimalProfilesPage from './pages/AnimalProfilesPage';

function App() {
  return (
    <div className='App'>
      <Router>
            <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/animal-form" element={<AnimalConfigPage />} />
              <Route path="/animal-options" element={<AnimalOptionChoose />} />
              <Route path="/animal-profile" element={<AnimalProfilesPage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
