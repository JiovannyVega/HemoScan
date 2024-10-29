import { Link } from "react-router-dom";
import useGoogleAuth from "../auth/useGoogleAuth";

const LoginPage = () => {
  const { profile, login, logOut } = useGoogleAuth();

  return (
    <>
      <div className="flex flex-row h-full bg-gradient-to-b from-primary to-secondary">
        <div className="items-center hidden w-1/2 sm:flex">
          <img src="/assets/Intro.png" alt="Intro" className="h-250" />
        </div>
        <div className="flex flex-col items-center w-full h-full ml-auto sm:w-1/2 bg-background dark:bg-background-dark text-text dark:text-text-dark">
          <div className="flex flex-row w-11/12 text-center border-b">
            <div className="w-1/2 mt-5">
              <Link to="/login" className="font-bold no-underline p-7">Iniciar sesión</Link>
            </div>
            <div className="w-1/2 mt-5">
              <Link to="/signup" className="ml-auto no-underline p-7">Registrate</Link>
            </div>
          </div>
          <p className="mt-4 text-2xl">Iniciar sesión</p>
          {profile ? (
            <div className="flex flex-col h-full p-7">
              <img src={profile.picture} alt="Profile" className="w-40 h-40 mb-5 bg-cover border-4 rounded-full border-hover dark:border-hover-dark" />
              <h2 className="m-5 text-2xl font-bold">{profile.name}</h2>
              <p className="m-0 overflow-hidden font-bold">{profile.email}</p>
              <button className="p-2 m-5 text-white rounded-md bg-primary hover:bg-secondary" onClick={logOut}>Cerrar sesión</button>
            </div>
          ) : (
            <div className="flex flex-col justify-center w-11/12 h-full p-7">
              <form action="" className="flex flex-col justify-center h-auto">
                <img src="/assets/perfil-icono.png" className="self-center w-20 h-20 mb-4" alt="perfil" />
                <input type="text" className="p-3 my-5 mb-4 border rounded-md bg-background dark:bg-background-dark" placeholder="Correo electronico" name="correo" id="correo" />
                <input type="password" className="p-3 my-5 mb-4 border-2 rounded-md bg-background dark:bg-background-dark" placeholder="Contraseña" name="contrasena" id="contrasena" />
                <div className="flex flex-row">
                  <p className="my-4 text-left">¿Olvidaste tu contraseña?</p>
                  <button className="w-1/2 p-3 mb-4 ml-auto text-white border-2 rounded-md bg-primary" type="submit">Ingresar</button>
                </div>
                <p className="mb-4 text-center">O</p>
              </form>
              <button className="flex items-center justify-center p-2 mb-4 space-x-2 border-2 rounded-md" onClick={login}>
                <img src="/assets/google.png" alt="Google Login" className="w-5 h-5" />
                <span>Continuar con Google</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;