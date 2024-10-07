import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <main>
      <div className="login-container">
        <div className="form-container">
          <img
            src={require("../assets/perfil-icono.png")}
            alt="Profile Icon"
            className="profile-icon"
          />
          <form>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Correo electrónico" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" />
            <a href="#" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </a>
            <button type="submit">Ingresar</button>
          </form>
          <p>O</p>
          <button className="google-login">
            <img src={require("../assets/google.png")} alt="Google" /> Continuar
            con Google
          </button>
          <p>
            ¿No tienes una cuenta?
            <a href="#" className="register-link">
              Regístrate
            </a>
          </p>
        </div>
        <div className="image-container">
          <img src={require("../assets/medicos.png")} alt="People Working" />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
