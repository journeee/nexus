import './App.css';

import { Routes, Route } from "react-router-dom"

// pages
import LandingPage from './pages/LandingPage/LandingPage';
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/home" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
