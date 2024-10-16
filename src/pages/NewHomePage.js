import React from 'react';
import styles from "./NewHomePage.module.css";

function NewHomePage() {
    return (
        <div className={styles.container}>
            {/* Banner Principal con imagen de fondo */}
            <section className={styles.banner}>
                <h1 className={styles.mainTitle}>Analiza tu salud.</h1>
                <h2 className={styles.subTitle}>Con tecnología de inteligencia artificial</h2>
                <div className={styles.bannerContent}>
                    <p className={styles.tagline}>Obtén resultados precisos de tus exámenes de hemoglobina y recomendaciones personalizadas al instante.</p>
                    <div className={styles.buttons}>
                        <button className={styles.mainButton}>Iniciar sesión</button>
                        <button className={styles.secondaryButton}>Crear Cuenta</button>
                    </div>
                </div>
            </section>
            <div className={styles.Maincontainer}>
            {/* Mensaje de Bienvenida General */}
            <section className={styles.welcomeMessage}>
                <h2>Bienvenido a HemoScan</h2>
                <p>Analiza tus exámenes de hemoglobina y obtén resultados rápidos y recomendaciones personalizadas basadas en inteligencia artificial.</p>
            </section>

            {/* Descripción del Servicio */}
            <section className={styles.serviceDescription}>
                <h2>¿Qué es HemoScan?</h2>
                <p>HemoScan utiliza inteligencia artificial avanzada para analizar tus exámenes médicos y proporcionarte resultados precisos y recomendaciones para mejorar tu salud.</p>
                <div className={styles.authButtons}>
                    <button className={styles.authButton}>Subir examen</button>
                </div>
            </section>

            {/* Sección de Beneficios */}
            <section className={styles.benefits}>
                <h2>¿Por qué elegir HemoScan?</h2>
                <ul>
                    <li>Rápido, preciso y seguro.</li>
                    <li>Análisis de IA en tiempo real.</li>
                    <li>Recomendaciones personalizadas para tu salud.</li>
                    <li>No se necesitan equipos especializados.</li>
                </ul>
            </section>
            </div>
        </div>
    );
}

export default NewHomePage;
