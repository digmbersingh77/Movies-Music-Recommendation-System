import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import SignIn from './Pages/SignIn/SignIn';
import Movies from './Pages/Movies/Movies';
import Music from './Pages/Music/Music';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {<Route path="/SignIn" element={<SignIn />} />}
      {<Route path="/Movies" element={<Movies />} />}
      {<Route path="/Music" element={<Music />} />}
    </Routes>
  </Router>
  );
}

export default App;
