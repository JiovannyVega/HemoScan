import React from 'react';
import styles from './HFAQPage.module.css'; // Asegúrate de que el archivo CSS exista y esté bien configurado

function HFAQPage() {
  return (
    <div>
      <section className={styles.banner}>
        <h1 className={styles.title}>¿Como podemos ayudarte?</h1>
        <div className={styles.searchSection}>
          <div>
            <input placeholder="Ask a question" type="text" className={styles.inputPh}/>
            <span class="icon">🔍</span>
          </div>
        </div>
      </section>
      <div className={styles['app-container']}>
        <div className={styles['card-grid']}>
            <h3 className={styles.subtitulos}>Centro de Ayuda y Preguntas Frecuentes (FAQ)</h3>
            <p className={styles.texto}>
            Aquí encontrarás respuestas a las preguntas más comunes sobre HemoScan y cómo utilizarlo. Si no encuentras lo que buscas, no dudes en contactarnos.
            </p>
          <section className={styles.card}>
            <h3 className={styles.subtitulos}>General</h3>
                <ul>
                    <li>
                        <strong>Pregunta 1:</strong> ¿Qué es HemoScan?
                        <li>Respuesta: HemoScan es una herramienta que utiliza inteligencia artificial para analizar tus exámenes de hemoglobina y ofrecerte resultados precisos y recomendaciones personalizadas.</li>
                    </li>
                    <li>
                        <strong>Pregunta 2:</strong> ¿Cómo funciona HemoScan?
                        <li>Respuesta: Solo necesitas subir una imagen de tu examen médico de hemoglobina y HemoScan la analizará para determinar si tus niveles son normales, bajos o altos. También recibirás consejos para mejorar tu salud.</li>
                    </li>
                </ul>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subtitulos}>Cuenta y seguridad</h3>
                <ul>
                    <li>
                        <strong>Pregunta 1:</strong> ¿Cómo puedo crear una cuenta?
                        <li>Respuesta: Puedes crear una cuenta haciendo clic en 'Registrarse' en la página principal y completando el formulario con tus datos personales.</li>
                    </li>
                    <li>
                        <strong>Pregunta 2:</strong> ¿Cómo cambio mi contraseña?
                        <li>Respuesta: En tu página de perfil, encontrarás una sección de 'Seguridad' donde podrás cambiar tu contraseña fácilmente.</li>
                    </li>
                    <li>
                        <strong>Pregunta 3:</strong> ¿Es segura la información que subo a HemoScan?
                        <li>Respuesta: Sí, todos los datos subidos a HemoScan están protegidos con medidas de seguridad avanzadas y son tratados de manera confidencial.</li>
                    </li>
                </ul>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subtitulos}>Exámenes y resultados</h3>
                <ul>
                        <li>
                            <strong>Pregunta 1:</strong> ¿Cómo subo un examen de hemoglobina?
                            <li>Respuesta: En la página principal, haz clic en 'Subir Examen de Hemoglobina', selecciona la imagen de tu examen desde tu dispositivo, y HemoScan hará el análisis por ti.</li>
                        </li>
                        <li>
                            <strong>Pregunta 2:</strong> ¿Qué tipo de imágenes acepta HemoScan?
                            <li>Respuesta: Aceptamos imágenes en formatos comunes como JPG, PNG, y PDF.</li>
                        </li>
                        <li>
                            <strong>Pregunta 3:</strong> ¿Cuánto tiempo tarda en analizar mi examen?
                            <li>Respuesta: El análisis suele tomar solo unos segundos. Recibirás los resultados casi de inmediato.</li>
                        </li>
                    </ul>
          </section>

          <section className={styles.card}>
            <h3 className={styles.subtitulos}>Contacto y soporte</h3>
                <ul>
                    <li>
                        <strong>Pregunta 1:</strong> ¿Cómo puedo contactar al soporte?
                        <li>Respuesta: "Si tienes alguna duda o problema, puedes enviarnos un mensaje a través de nuestro formulario de contacto o escribirnos a [correo@hemoscan.com]."</li>
                    </li>
                </ul>
          </section>
          <section className={styles.card}>
            <h3 className={styles.subtitulos}>¿Algo más?</h3>
                <p>¿No encontraste lo que buscabas?</p>
                <p>Contáctanos</p>
              <button type="submit">Contactar</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HFAQPage;
