import { Link } from "react-router-dom";

function SignupPage() {
    return (
        <>
            <div className="flex flex-row h-auto bg-gradient-to-b from-primary to-secondary">
                <div className="items-center hidden w-1/2 sm:flex">
                    <img src="/assets/Intro.png" alt="Intro" className="h-250" />
                </div>
                <div className="flex flex-col items-center w-full h-full ml-auto sm:w-1/2 bg-background dark:bg-background-dark text-text dark:text-text-dark">
                    <div className="flex flex-row w-11/12 text-center border-b">
                        <div className="w-1/2 mt-5">
                            <Link to="/login" className="no-underline p-7">Iniciar sesión</Link>
                        </div>
                        <div className="w-1/2 mt-5">
                            <Link to="/signup" className="ml-auto font-bold no-underline p-7"> Registrate</Link>
                        </div>
                    </div>
                    <p className="mt-4 text-2xl">Registrar</p>
                    <img src="/assets/perfil-icono.png" className="self-center w-20 h-20 mt-5 mb-4" alt="perfil" />
                    <p className="">
                        Regístrate ahora y obtén acceso completo a nuestra aplicación.
                    </p>
                    <form className="flex flex-col w-11/12 h-full p-7">
                        <div className="flex flex-row justify-center w-auto">
                            <input required placeholder="Nombre(s)" type="text" className="w-1/2 p-3 mb-4 mr-1 border rounded-md bg-background dark:bg-background-dark" />
                            <input required placeholder="Apellido" type="text" className="w-1/2 p-3 mb-4 border rounded-md bg-background dark:bg-background-dark" />
                        </div>
                        <label>
                            <input required placeholder="Correo" type="text" className="w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark" />
                        </label>
                        <label>
                            <input
                                required
                                placeholder="Contrasena"
                                type="password"
                                className="w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark"
                            />
                        </label>
                        <label>
                            <input
                                required
                                placeholder="Confirma tu contrasena"
                                type="password"
                                className="w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark"
                            />
                        </label>
                        <button className="p-3 mb-4 text-white border-2 rounded-md bg-primary" type="submit">Ingresar</button>
                    </form>
                    <p className="mb-5">O</p>
                    <button className="flex items-center justify-center p-2 mb-4 space-x-2 border-2 rounded-md">
                        <img src="/assets/google.png" alt="Google Login" className="w-5 h-5" />
                        <span>Continuar con Google</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default SignupPage;