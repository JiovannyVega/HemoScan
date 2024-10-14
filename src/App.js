import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import LoginPage from "./pages/LoginPage.js";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage.js";
import Dashboard from "./pages/Dashboard.js";
import style from "./App.module.css"; // Import the CSS file

function App() {
  return (
    <Router basename="/HemoScan">
      <div className="App">
        <Header />
        <div className={style.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/*' element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
