import { useState } from 'react';

const ProfilePage = () => {

  const [user, setUser] = useState({
    name: "Kim Dahyun",
    email: "kimdahyun@gmail.com",
    birthDate: "1998-05-28",
    gender: "femenino",
    language: "Espanol",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col items-center p-0 m-0 text-text dark:text-text-dark">
        <section className="bg-[url('./src/assets/NHP.png')] bg-center bg-cover w-full h-96 "></section>
        <div className="flex flex-col items-center w-1/2 p-5 mb-0 rounded-lg -m-80 bg-background dark:bg-background-dark">
          <img src={("./src/assets/Perfil.jpg")} alt="Profile" className="mt-5 mb-5 bg-cover border-4 rounded-full w-60 h-60 border-hover dark:border-hover-dark" />
          <div className="w-4/5 mt-5 mb-5 text-center">
            <p className="text-4xl">{user.name}</p>
            <p className="text-xl">{user.email}</p>
          </div>
          <div className="w-10/12 mt-5 mb-5 text-left">
            <p className="text-3xl">Información personal</p>
            <div className="mb-3">
              <label className="block mt-2 text-xl">Nombre</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark"
              />
            </div>
            <div className="mb-3">
              <label className="block text-xl">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark"
              />
            </div>
            <div className="mb-3">
              <label className="text-xl">Fecha de nacimiento</label>
              <input
                type="date"
                name="birthDate"
                value={user.birthDate}
                onChange={handleChange}
                className="w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark"
              />
            </div>
            <div className="mb-3">
              <label className="text-xl">Género</label>
              <select name="gender" value={user.gender} onChange={handleChange} className="w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark">
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          <div className="w-10/12 mt-5 mb-5 text-left">
            <p className="text-3xl">Preferencias</p>
            <div className="mb-3">
              <label className="mt-2 text-xl">Idioma</label>
              <select name="language" value={user.language} onChange={handleChange} className="w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark">
                <option value="Espanol">Español</option>
                <option value="Ingles">Ingles</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="text-xl">Notificaciones</label>
              <input type="checkbox" name="notifications" className="w-full p-3 mt-1 text-text" checked={user.notifications} onChange={(e) => setUser({ ...user, notifications: e.target.checked })} />
            </div>
          </div>
          <div className="w-10/12 mt-5 mb-5 text-left">
            <p className="flex text-3xl">Historial de actividades</p>
            <ul>
              <li className="flex items-center justify-between">
                <span>Examen 1</span>
                <button className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary">Ver detalles</button>
              </li>
              <li className="flex items-center justify-between">
                <span>Examen 2</span>
                <button className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary">Ver detalles</button>
              </li>
              <li className="flex items-center justify-between">
                <span>Examen 3</span>
                <button className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary ">Ver detalles</button>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={() => console.log("Cerrar sesion")} className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary">Cerrar sesion</button>
            <button onClick={() => console.log("Eliminar cuenta")} className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary">Eliminar cuenta</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;