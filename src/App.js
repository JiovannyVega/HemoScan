import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage.js';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={require('./assets/logo.png')} alt="HemoScan AI" />
          <h1>HemoScan AI</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/login" className="active">Acceder</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;