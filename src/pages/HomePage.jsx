import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div class="flex flex-col items-center m-0 p-0">
                <section class="bg-[url('./src/assets/NHP.png')] bg-center w-full h-96">
                    <p class="text-8xl text-center text-white mt-11">Analiza tu salud.</p>
                    <p class="text-4xl text-center text-white mt-2">Con tecnologia de inteligencia artificial</p>
                    <div>
                        <p class="text-xl mb-5 text-white text-center mt-4">Obten resultados precisos de tus examenes de hemoglobina y recomendaciones personalizadas al instante.</p>
                        <div class="flex justify-center">
                            <Link to="" class="m-2 p-4 rounded-md cursor-pointer bg-primary hover-secondary text-white">Iniciar Sesion</Link>
                            <Link to="" class="m-2 p-4 rounded-md cursor-pointer bg-primary hover-secondary text-white">Crear Cuenta</Link>
                        </div>
                    </div>
                </section>
                <div class="flex flex-col bg-gray-100 m-0 p-0 w-4/5 items-center">
                    <section class="text-center w-3/5 mt-20 text-text">
                        <p class="text-4xl mt-6">Bienvenido a HemoScan</p>
                        <p class="text-2xl mt-6">Analiza tus examenes de hemoglobina y obtén resultados rápidos y recomendacionales personalizadas basadas en inteligencia artificial</p>
                    </section>
                    <section class="text-center w-3/5 mt-20">
                        <p class=" text-4xl mt-6">¿Qué es HemoScan?</p>
                        <p class="text-2xl mt-6">HemoScan utiliza inteligencia artificial avanzada para analizar tus exámenes médicos y proporcionarte resultados precisos y recomendaciones para mejorar tu salud</p>
                        <button class="m-2 p-4 mt-6 rounded-md cursor-pointer bg-sky-950 text-white">Subir Examen</button>
                    </section>
                    <section class="w-3/5 mt-18 text-text">
                        <p class="text-center text-4xl mt-6">¿Por qué elegir HemoScan?</p>
                        <ul class="text-left list-none p-0 text-2xl mt-6 mb-20">
                            <li>Rápido, preciso y seguro</li>
                            <li>Análisis de IA en tiempo real</li>
                            <li>Recomendaciones personalizadas para tu salud</li>
                            <li>No se necesitan equipos especializados</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomePage;