import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col items-center p-0 m-0 text-text dark:text-text-dark">
                <section className="bg-[url('./src/assets/NHP.png')] bg-center bg-cover w-full h-auto">
                    <p className="text-center text-white text-8xl mt-11">Analiza tu salud</p>
                    <p className="mt-2 text-4xl text-center text-white">Con tecnologia de inteligencia artificial</p>
                    <div>
                        <p className="mt-4 mb-5 text-xl text-center text-white">Obten resultados precisos de tus examenes de hemoglobina y recomendaciones personalizadas al instante.</p>
                        <div className="flex justify-center mb-12">
                            <Link to="" className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary">Iniciar Sesion</Link>
                            <Link to="" className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary">Crear Cuenta</Link>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col items-center w-4/5 p-0 m-0 bg-background dark:bg-background-dark">
                    <section className="w-3/5 mt-20 text-center">
                        <p className="mt-6 text-4xl">Bienvenido a HemoScan</p>
                        <p className="mt-6 text-2xl">Analiza tus examenes de hemoglobina y obtén resultados rápidos y recomendacionales personalizadas basadas en inteligencia artificial</p>
                    </section>
                    <section className="w-3/5 mt-20 text-center">
                        <p className="mt-6 text-4xl ">¿Qué es HemoScan?</p>
                        <p className="mt-6 text-2xl">HemoScan utiliza inteligencia artificial avanzada para analizar tus exámenes médicos y proporcionarte resultados precisos y recomendaciones para mejorar tu salud</p>
                        <button className="p-4 m-2 mt-6 text-white rounded-md cursor-pointer bg-sky-950">Subir Examen</button>
                    </section>
                    <section className="w-3/5 mt-18">
                        <p className="mt-6 text-4xl text-center">¿Por qué elegir HemoScan?</p>
                        <ul className="p-0 mt-6 mb-20 text-2xl text-left list-none">
                            <li>-Rápido, preciso y seguro</li>
                            <li>-Análisis de IA en tiempo real</li>
                            <li>-Recomendaciones personalizadas para tu salud</li>
                            <li>-No se necesitan equipos especializados</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomePage;