import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link to="/about">Acerca de Nosotros</Link>
                    <Link to="/hfaqpage">Centro de Ayuda</Link>
                </div>
                <div className={styles.copyright}>
                    <p>© 2024 HemoScan. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;