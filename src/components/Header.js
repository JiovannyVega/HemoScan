import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={require("../assets/logo.png")} alt="HemoScan AI" />
          <h1>HemoScan AI</h1>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/login" className={styles.active}>
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