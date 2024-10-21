import { Link } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";

const LoginPage = () => {
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
        <div className="flex flex-col items-center h-full m-4">
            <div className="flex flex-col w-full h-auto bg-white lg:flex-row lg:w-3/5 rounded-2xl lg:h-5/6">
                {profile ? (
                    <div className="flex flex-col justify-center w-full h-full lg:w-auto p-7">
                        <img src={profile.picture} alt="Profile" className="w-20 m-5" />
                        <h2 className="text-2xl font-bold">{profile.name}</h2>
                        <p className="m-0 overflow-hidden font-bold ">{profile.email}</p>
                        <button className="border-2 bg-[#284B63] text-white rounded-md p-1" onClick={logOut}>Cerrar sesión</button>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center w-full h-full lg:w-1/4 p-7">
                        <form action="" className="flex flex-col justify-center h-auto">
                            <img src="./src/assets/perfil-icono.png" className="self-center w-20 h-20" alt="perfil" />
                            <label htmlFor="correo" className="font-bold">Correo Electronico</label>
                            <input type="text" className="p-1 border rounded-md" placeholder="Correo electronico" name="correo" id="correo" />
                            <label htmlFor="contrasena" className="mt-8 font-bold">Contraseña</label>
                            <input type="password" className="p-1 border-2 rounded-md" placeholder="Contraseña" name="contrasena" id="contrasena" />
                            <p className="my-4 text-end">¿Olvidaste tu contraseña?</p>
                            <button className="border-2 bg-[#284B63] text-white rounded-md p-1" type="submit">Ingresar</button>
                            <p className="text-center">O</p>
                        </form>
                        <button className="flex items-center justify-center p-2 space-x-2 border-2 rounded-md" onClick={() => login()} >
                            <img src="./src/assets/google.png" alt="Google Login" className="w-5 h-5" />
                            <span>Continuar con Google</span>
                        </button>
                        <p className="mt-5 text-center">¿No tienes una cuenta?
                            <Link to="/SignUp" className="font-bold no-underline"> Registrate</Link>
                        </p>
                    </div>
                )}
                < div className="items-end justify-end hidden w-full h-64 cursor-pointer lg:flex lg:w-3/4 lg:h-full" >
                    <img src="./src/assets/medicosImage.png" className="w-full h-full rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none" alt="Medicos" />
                </div >
            </div >
        </div >
    );
};

export default LoginPage;