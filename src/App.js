import './App.css';
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignupPage = lazy(() => import('./pages/SignupPage/Signup'));
const SigninPage = lazy(() => import('./pages/SigninPage/Signin'));
const Dashboard = lazy(() => import('./pages/DashboardPage/Dashboard'));

function App() {
  return (
    <div className="App">
      <nav>
        <div className="mobile-menu">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <span></span>
          </label>
          <ul className="menu-items">
            <li>
              <Link to="/">Landing</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

