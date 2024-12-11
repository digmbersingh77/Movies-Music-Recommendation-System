import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import SignIn from './Pages/SignIn/SignIn';
import Movies from './Pages/Movies/Movies';
import Music from './Pages/Music/Music';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate('/');
      } else {
        navigate('/SignIn');
      }
    });
  }, [navigate]);

  return (
    <div>
    <ToastContainer theme='dark'/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/Music" element={<Music />} />
    </Routes>
    </div>
  );
}

export default App;
