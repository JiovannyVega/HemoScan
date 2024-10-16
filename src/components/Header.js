import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={require("../assets/logo.png")} alt="HemoScan AI" />
          <h1 className={styles.logoText}>HemoScan AI</h1>
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
          <li>
            <div className={styles.toggleContainer}>
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                onChange={toggleTheme}
                className={styles.toggleCheckbox}
              />
              <label htmlFor="toggle" className={styles.toggleLabel}></label>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
