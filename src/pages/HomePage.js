import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <img
            src={require("../assets/perfil-icono.png")}
            alt="Profile Icon"
            className={styles.profileIcon}
          />
          <form>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Correo electrónico" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" />
            <a href="#" className={styles.forgotPassword}>
              ¿Olvidaste tu contraseña?
            </a>
            <button type="submit">Ingresar</button>
          </form>
          <p>O</p>
          <button className={styles.googleLogin}>
            <img src={require("../assets/google.png")} alt="Google" /> Continuar
            con Google
          </button>
          <p>
            ¿No tienes una cuenta?
            <a href="#" className={styles.registerLink}>
              Regístrate
            </a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={require("../assets/medicos.png")} alt="People Working" />
        </div>
      </div>
    </main>
  );
}

export default HomePage;