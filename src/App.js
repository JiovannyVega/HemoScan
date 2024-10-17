import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import SignupPage from "./pages/SignupPage.js";
import LoginPage from "./pages/LoginPage.js";
import AboutPage from "./pages/AboutPage.js";
import Dashboard from "./pages/Dashboard.js";
import Footer from "./components/Footer.js";
import ErrorPage from "./pages/ErrorPage.js";
import NewHomePage from "./pages/NewHomePage.js"
import ProfilePage from "./pages/ProfilePage.js"
import HFAQPage from "./pages/HFAQPage.js";
import style from "./App.module.css"; // Import the CSS file

function App() {
  return (
    <Router basename="/HemoScan">
      <div className={style.App}>
        <Header />
        <div className={style.content}>
          <Routes>
            <Route path="/" element={<NewHomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/hfaqpage" element={<HFAQPage />} />
            <Route path='/*' element={<ErrorPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
