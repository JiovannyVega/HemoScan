import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full p-5 mt-auto text-sm font-bold text-center bg-background dark:bg-gray-800 text-text dark:text-text-dark">
            <div className="flex justify-between align-middle">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/about" className="hover:underline hover:text-hover dark:hover:text-hover-dark">Acerca de Nosotros</Link>
                    <Link to="/hfaqpage" className="hover:underline hover:text-hover dark:hover:text-hover-dark">Centro de Ayuda</Link>
                    <Link>Hola</Link>
                    <Link>Hola</Link>
                    <Link>Hola</Link>
                </div>
                <div>
                    <p>© 2024 HemoScan. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;