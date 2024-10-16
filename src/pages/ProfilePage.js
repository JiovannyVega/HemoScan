import React, { useState } from "react";
import styles from "./ProfilePage.module.css"; // Asegúrate de que este import esté correcto

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Kim Da-hyun",
    email: "kimdahyun@gmail.com",
    birthDate: "1998-05-28",
    gender: "Femenino",
    language: "Español",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    // Lógica para cambiar la imagen de perfil
    console.log("Cambiar imagen de perfil", e.target.files[0]);
  };

  return (
    <div>
            <section className={styles.banner}>
            </section>
      <div className={styles.profileContainer}>
            <img
            src={require("../assets/Perfil.jpg")} // Cambia esta ruta a tu imagen de perfil
            alt="Profile"
            className={styles.profileImage}
            />

        <div className={styles.profileHeader}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>

        <div className={styles.profileInfo}>
          <h2>Información personal</h2>
          <div className={styles.inputGroup}>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              name="birthDate"
              value={user.birthDate}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Género</label>
            <select name="gender" value={user.gender} onChange={handleChange} className="Slct">
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        <div className={styles.profilePreferences}>
          <h2>Preferencias</h2>
          <div className={styles.inputGroup}>
            <label>Idioma</label>
            <select
              name="language"
              value={user.language}
              onChange={handleChange}
            >
              <option value="Español">Español</option>
              <option value="Inglés">Inglés</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Notificaciones</label>
            <input
              type="checkbox"
              name="notifications"
              checked={user.notifications}
              onChange={(e) =>
                setUser({ ...user, notifications: e.target.checked })
              }
            />
          </div>
        </div>

        <div className={styles.activityHistory}>
          <h2>Historial de actividades</h2>
          <ul>
            <li>
              Examen 1<button>Ver detalles</button>
            </li>
            <li>
              Examen 2<button>Ver detalles</button>
            </li>
            <li>
              Examen 3<button>Ver detalles</button>
            </li>
          </ul>
        </div>

        <div className={styles.accountOptions}>
          <button onClick={() => console.log("Cerrar sesión")}>Cerrar sesión</button>
          <button onClick={() => console.log("Eliminar cuenta")}>Eliminar cuenta</button>
        </div>
    </div>
    </div>

  );
};

export default ProfilePage;