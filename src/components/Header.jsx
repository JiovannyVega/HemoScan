import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    ['Home', '/'],
    ['About us', '/about'],
    ['Login', '/Login'],
    ['Profile', '/profile'],
    ['HFAQ', '/hfaq'],
    ['Dashboard', '/dashboard'],
  ];

  return (
    <header className="p-5 m-0 bg-white dark:bg-gray-800">
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto shrink">
        <div className="flex items-center mb-4 shrink-1 md:mb-0">
          <img src="./src/assets/logo.png" alt="logo" className="w-10 mr-2" />
          <h1 className="text-2xl text-[#284B63] font-bold dark:text-white">HemoScan AI</h1>
        </div>

        <nav className="hidden gap-4 shrink-1 sm:flex-row sm:flex">
          {navItems.map(([title, url]) => (
            <Link key={url} to={url} className="font-semibold text-gray-800 hover:text-blue-500 active:text-blue-500 dark:text-gray-200">
              {title}
            </Link>
          ))}
          <div className="relative inline-block w-10 align-middle transition duration-200 ease-in select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox"
              onClick={toggleTheme}
            />
            <label
              htmlFor="toggle"
              className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"
            ></label>
          </div>
        </nav>

        <div className="relative sm:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-800 bg-gray-200 rounded-md dark:text-gray-200 dark:bg-gray-700">
            Menu
          </button>
          {isMenuOpen && (
            <nav className="absolute right-0 z-10 flex flex-col p-4 mt-2 space-y-2 bg-white border rounded-md shadow-lg dark:bg-gray-800">
              {navItems.map(([title, url]) => (
                <Link key={url} to={url} className="font-semibold text-gray-800 hover:text-blue-500 active:text-blue-500 dark:text-gray-200">
                  {title}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;