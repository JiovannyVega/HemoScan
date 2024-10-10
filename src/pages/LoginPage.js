import React from "react";
import perfilIcono from "../assets/registro-icono.png";
import googleIcon from "../assets/google.png";
import medicosImage from "../assets/698.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <img src={perfilIcono} alt="Profile Icon" className={styles.profileIcon} />
          <form className={styles.form}>
            <p className={styles.title}>Registro</p>
            <p className={styles.message}>
              Regístrate ahora y obtén acceso completo a nuestra aplicación.
            </p>
            <div className={styles.flex}>
              <label>
                <input required placeholder="" type="text" className={styles.input} />
                <span>Nombres</span>
              </label>
              <label>
                <input required placeholder="" type="text" className={styles.input} />
                <span>Apellidos</span>
              </label>
            </div>
            <label>
              <input required placeholder="" type="text" className={styles.input} />
              <span>Correo</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="password"
                className={styles.input}
              />
              <span>Contraseña</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="password"
                className={styles.input}
              />
              <span>Confirma tu contraseña</span>
            </label>
            <button className={styles.submit}>Continuar</button>
            <p className={styles.signin}>
              ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
            </p>
          </form>
          <p>O</p>
          <button className={styles.googleLogin}>
            <img src={googleIcon} alt="Google" /> Continuar con Google
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={medicosImage} alt="People Working" />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;