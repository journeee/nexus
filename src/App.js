import './App.css';

import { Routes, Route } from "react-router-dom"

// pages
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from './pages/SignupPage/Signup';
import SigninPage from './pages/SigninPage/Signin';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />}/>
            <Route path="/signin" element={<SigninPage />} />
        </Routes>
    </div>
  );
}

export default App;
