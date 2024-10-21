import { Link } from "react-router-dom";
import useGoogleAuth from "../auth/useGoogleAuth";

const LoginPage = () => {
  const { profile, login, logOut } = useGoogleAuth();

  return (
    <div className="flex flex-col items-center h-full m-4">
      <div className="flex flex-col w-full h-auto bg-white lg:flex-row lg:w-3/5 rounded-2xl lg:h-5/6">
        {profile ? (
          <div className="flex flex-col justify-center w-full h-full lg:w-auto p-7">
            <img src={profile.picture} alt="Profile" className="w-20 m-5" />
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="m-0 overflow-hidden font-bold">{profile.email}</p>
            <button className="border-2 bg-[#284B63] text-white rounded-md p-1" onClick={logOut}>Cerrar sesión</button>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full h-full lg:w-1/4 p-7">
            <form action="" className="flex flex-col justify-center h-auto">
              <img src="./src/assets/perfil-icono.png" className="self-center w-20 h-20 mb-4" alt="perfil" />
              <label htmlFor="correo" className="font-bold">Correo Electronico</label>
              <input type="text" className="p-1 mb-4 border rounded-md" placeholder="Correo electronico" name="correo" id="correo" />
              <label htmlFor="contrasena" className="mt-4 font-bold">Contraseña</label>
              <input type="password" className="p-1 mb-4 border-2 rounded-md" placeholder="Contraseña" name="contrasena" id="contrasena" />
              <p className="my-4 text-end">¿Olvidaste tu contraseña?</p>
              <button className="border-2 bg-[#284B63] text-white rounded-md p-1 mb-4" type="submit">Ingresar</button>
              <p className="mb-4 text-center">O</p>
            </form>
            <button className="flex items-center justify-center p-2 mb-4 space-x-2 border-2 rounded-md" onClick={login}>
              <img src="./src/assets/google.png" alt="Google Login" className="w-5 h-5" />
              <span>Continuar con Google</span>
            </button>
            <p className="mt-5 text-center">¿No tienes una cuenta?
              <Link to="/SignUp" className="font-bold no-underline"> Registrate</Link>
            </p>
          </div>
        )}
        <div className="flex items-end justify-end w-full h-64 cursor-pointer lg:w-3/4 lg:h-full">
          <img src="./src/assets/medicosImage.png" className="w-full h-full rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none" alt="Medicos" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;