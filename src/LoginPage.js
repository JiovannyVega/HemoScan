import React from 'react';
import perfilIcono from './assets/registro-icono.png';
import googleIcon from './assets/google.png';
import medicosImage from './assets/698.png';
import './LoginPage.css';

function LoginPage() {
    return (
        <main>
            <div className="login-container">
                <div className="form-container">
                    <img
                        src={perfilIcono}
                        alt="Profile Icon"
                        className="profile-icon"
                    />
                    <form className="form">
                        <p className="title">Registro</p>
                        <p className="message">Regístrate ahora y obtén acceso completo a nuestra aplicación.</p>
                        <div className="flex">
                            <label>
                                <input required placeholder="" type="text" className="input" />
                                <span>Nombres</span>
                            </label>
                            <label>
                                <input required placeholder="" type="text" className="input" />
                                <span>Apellidos</span>
                            </label>
                        </div>
                        <label>
                            <input required placeholder="" type="text" className="input" />
                            <span>Correo</span>
                        </label>
                        <label>
                            <input required placeholder="" type="password" className="input" />
                            <span>Contraseña</span>
                        </label>
                        <label>
                            <input required placeholder="" type="password" className="input" />
                            <span>Confirma tu contraseña</span>
                        </label>
                        <button className="submit">Continuar</button>
                        <p className="signin">¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
                    </form>
                    <p>O</p>
                    <button className="google-login">
                        <img src={googleIcon} alt="Google" /> Continuar con Google
                    </button>
                </div>
                <div className="image-container">
                    <img src={medicosImage} alt="People Working" />
                </div>
            </div>
        </main>
    );
}

export default LoginPage;