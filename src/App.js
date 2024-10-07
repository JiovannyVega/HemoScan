import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={require('./assets/logo.png')} alt="HemoScan AI" />
          <h1>HemoScan AI</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#" className="active">Acceder</a></li>
        </ul>
      </nav>
    </header>
  );
}

function LoginContainer() {
  return (
    <main>
      <div className="login-container">
        <div className="form-container">
          <img
            src={require('./assets/perfil-icono.png')}
            alt="Profile Icon"
            className="profile-icon"
          />
          <form>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Correo electrónico" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" />
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            <button type="submit">Ingresar</button>
          </form>
          <p>O</p>
          <button className="google-login">
            <img src={require('./assets/google.png')} alt="Google" /> Continuar con Google
          </button>
          <p>
            ¿No tienes una cuenta?
            <a href="#" className="register-link">Regístrate</a>
          </p>
        </div>
        <div className="image-container">
          <img src={require('./assets/medicos.png')} alt="People Working" />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <LoginContainer />
    </div>
  );
}

export default App;