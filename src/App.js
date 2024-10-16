import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import LoginPage from "./pages/LoginPage.js";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage.js";
import Dashboard from "./pages/Dashboard.js";
import NewHomePage from "./pages/NewHomePage.js"
import ProfilePage from "./pages/ProfilePage.js"
import HFAQPage from "./pages/HFAQPage.js";
import style from "./App.module.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className={style.content}>
          <Routes>
            <Route path="/" element={<NewHomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/hfaqpage" element={<HFAQPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
