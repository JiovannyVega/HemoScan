import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    //El vw y vh son el ancho y alto de la pantalla.
    //Si tenemos un padre que tiene un altura, y tenemos un hijo en ese hijo si podemos utilziar los porcentajes en alto.
    //Si usas width si puedes utilziar porcentajes, aunque el padre no tenga un ancho definido y un padre.
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <>
            <header className="p-5 m-0 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="flex items-center">
                        <img src="./src/assets/logo.png" alt="logo" className="w-10 mr-2" />
                        <h1 className="text-2xl text-[#284B63] font-bold dark:text-white">HemoScan AI</h1>
                    </div>

                    <ul className="flex gap-4">
                        <li>
                            <button
                                className="border-2 bg-[#284B63] text-white rounded-md h-9 px-4"
                                onClick={toggleTheme}
                            >
                                Cambiar Tema
                            </button>
                        </li>
                        <li className="font-semibold text-gray-800 hover:text-blue-500 active:text-blue-500 dark:text-gray-200">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="font-semibold text-gray-800 hover:text-blue-500 active:text-blue-500 dark:text-gray-200">
                            <Link to="/about">About us</Link>
                        </li>
                        <li className="mr-5">
                            <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
                                <input
                                    type="checkbox"
                                    name="toggle"
                                    id="toggle"
                                    checked={isDarkMode}
                                    onChange={toggleTheme}
                                    className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox"
                                />
                                <label
                                    htmlFor="toggle"
                                    className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"
                                ></label>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
