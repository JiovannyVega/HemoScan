import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
        <>
            <div className="flex flex-col items-center h-full m-4">
                <div className="flex w-3/5 bg-white bg-white-300 rounded-2xl h-5/6">
                    <div className="flex flex-col justify-center w-1/4 h-full p-7">
                        <form action="" className="flex flex-col justify-center h-auto ">
                            <img src="./src/assets/perfil-icono.png" className="self-center w-20 h-20" alt="perfil" />
                            <label htmlFor="correo" className="font-bold">Correo Electronico</label>
                            <input type="text" className="p-1 border rounded-md " placeholder="Correo electronico" name="correo" id="correo" />
                            <label htmlFor="contrasena" className="mt-8 font-bold">Contraseña</label>
                            <input type="password" className="p-1 border-2 rounded-md" placeholder="Contraseña" name="contrasena" id="contrasena" />
                            <p className="my-4 text-end">¿Olvidaste tu contraseña?</p>
                            <button className="border-2 bg-[#284B63] text-white rounded-md p-1" type="submit">Ingresar</button>
                            <p className="text-center">O</p>
                        </form>
                        <button className="flex items-center justify-center p-2 space-x-2 border-2 rounded-md">
                            <img src="./src/assets/google.png" alt="Google Login" className="w-5 h-5" />
                            <span>Continuar con Google</span>
                        </button>
                        <p className="mt-5 text-center">¿No tienes una cuenta?
                            <Link to="/SignUp" className="font-bold no-underline">Registrate</Link>
                        </p>
                    </div>
                    <div className="flex items-end justify-end w-3/4 h-full cursor-pointer">
                        <img src="./src/assets/medicosImage.png" className="h-full rounded-r-2xl" alt="Medicos jsjsjsjs" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
