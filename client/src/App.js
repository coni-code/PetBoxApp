import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthScreen } from './components/Auth/AuthScreen';
import AnimalForm from './components/AnimalConfig/AnimalForm';
import './assets/styles/app.css';

function App() {
  return (
    <div className='App'>
      <Router>
            <Routes>
              <Route path="/" element={<AuthScreen />} />
              <Route path="/animal-form" element={<AnimalForm />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
