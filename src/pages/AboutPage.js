import React from 'react';
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles['app-container']}>
      <h1>Acerca de HemoScan AI</h1>
      <h2>Análisis inteligente de hemoglobina para mejorar tu salud</h2>

    <div className={styles['card-grid']}>
      <section className={styles.card}>
        <h3>Breve Resumen</h3>
        <p>
          HemoScan AI es un sistema experto impulsado por inteligencia artificial diseñado para analizar imágenes de exámenes de hemoglobina, ofreciendo resultados precisos y recomendaciones de salud. Nuestro objetivo es facilitar el acceso a información médica relevante y precisa, ayudando a los usuarios a monitorear su salud de manera más eficiente.
        </p>
      </section>

      <section className={styles.card}>
        <h3>Misión</h3>
        <p>
          Nuestra misión es democratizar el análisis médico mediante el uso de tecnología avanzada, ayudando a las personas a entender mejor su salud.
        </p>
      </section>

      <section className={styles.card}>
        <h3>Visión</h3>
        <p>
          Aspiramos a ser líderes en el análisis médico basado en IA, ayudando a millones de personas en todo el mundo a tomar decisiones informadas sobre su bienestar.
        </p>
      </section>

      <section className={styles.card}>
        <h3>Nuestro Equipo</h3>
        <p>
          El equipo de HemoScan AI está compuesto por desarrolladores, científicos de datos y expertos médicos comprometidos en ofrecer la mejor experiencia posible.
        </p>
        <div className={styles['team-members']}>
          <div className={styles.member}>
            <img src={require("../assets/people.png")} alt="Erick"/>
            <h4>Erick</h4>
            <p>Desarrollador FullStack</p>
          </div>
          <div className={styles.member}>
            <img src={require("../assets/people.png")} alt="Nestor"/>
            <h4>Nestor</h4>
            <p>Desarrollador Frontend</p>
          </div>
        </div>
      </section>

      <section className={styles.card}>
        <h3>Tecnologías</h3>
        <ul>
          <li>Frontend: HTML5, CSS, JavaScript, React</li>
          <li>Backend: Python, Flask/Django</li>
          <li>Base de Datos: MySQL o MongoDB</li>
          <li>Inteligencia Artificial: TensorFlow, PyTorch</li>
          <li>Procesamiento de Imágenes: OpenCV, PIL</li>
        </ul>
      </section>

      <section className={styles.card}>
        <h3>Nuestros Valores</h3>
        <ul>
          <li>Innovación: Siempre buscamos nuevas formas de mejorar nuestro sistema.</li>
          <li>Precisión: Nos esforzamos por ofrecer resultados confiables y precisos.</li>
          <li>Privacidad: Protegemos los datos de nuestros usuarios con los más altos estándares de seguridad.</li>
        </ul>
      </section>

      <section className={styles.card}>
        <h3>¿Cómo Empezamos?</h3>
        <p>
          HemoScan AI nació de la necesidad de ofrecer una herramienta accesible para que cualquier persona pueda analizar sus niveles de hemoglobina sin necesidad de equipos costosos o difíciles de manejar.
        </p>
      </section>

      <section className={styles.card}>
        <h3>Contacto</h3>
        <p>Para preguntas o sugerencias, puedes contactarnos a través de:</p>
        <ul>
          <li>Correo electrónico: </li>
          <li>Redes sociales: </li>
          <li>Dirección física: </li>
        </ul>
        <form className={styles['contact-form']}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  </div>
  );
}

export default AboutPage;