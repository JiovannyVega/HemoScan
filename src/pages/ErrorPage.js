import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.errorContainer}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.errorMessage}>Página no encontrada</h2>
                <p className={styles.errorDescription}>
                    Lo sentimos, la página que estás buscando no existe o ha ocurrido un error inesperado.
                </p>
                <Link to="/" className={styles.homeLink}>
                    Volver a la página principal
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;