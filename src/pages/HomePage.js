import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import styles from "./HomePage.module.css";

function HomePage() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: "application/json",
                    },
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <main className={styles.main}>
            <div className={styles.loginContainer}>
                <div className={styles.formContainer}>
                    {profile ? (
                        <div className={styles.profile}>
                            <img src={profile.picture} alt="Profile" className={styles.profileIcon} />
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <button onClick={logOut}>Cerrar sesión</button>
                        </div>
                    ) : (
                        <>
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
                            <button onClick={() => login()} className={styles.googleLogin}>
                                <img src={require("../assets/google.png")} alt="Google" /> Continuar con Google
                            </button>
                            <p>
                                ¿No tienes una cuenta?
                                <a href="#" className={styles.registerLink}>
                                    Regístrate
                                </a>
                            </p>
                        </>
                    )}
                </div>
                <div className={styles.imageContainer}>
                    <img src={require("../assets/medicos.png")} alt="People Working" />
                </div>
            </div>
        </main>
    );
}

export default HomePage;