import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={require("../assets/logo.png")} alt="HemoScan AI" />
          <h1>HemoScan AI</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/login" className="active">
              Acceder
            </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
