import React from 'react'

const AboutPage = () => {
    return (
        <>
            <div className="flex flex-col items-center p-0 m-0 text-text dark:text-text-dark">
                <section className="bg-[url('./src/assets/NHP.png')] bg-center bg-cover w-full h-96 ">
                    <p className="mt-24 text-6xl text-center text-white">Acerca de HemoScan AI</p>
                    <p className="mt-2 text-2xl text-center text-white">Análisis inteligente de hemoglobina para mejorar la salud</p>
                </section>
                <div className="flex flex-col items-center w-4/5 p-5 mb-0 -mt-24 text-center rounded-lg -24 bg-background dark:bg-background-dark">
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Breve resumen</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="ml-10 text-lg">HemoScan AI es un sistema experto impulsado por inteligencia artificial diseñado para analizar imágenes de exámenes de hemoglobina, ofreciendo resultados precisos y recomendaciones de salud. Nuestro objetivo es facilitar el acceso a información médica relevante y precisa, ayudando a los usuarios a monitorear su salud de manera más eficiente.</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Misión</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="ml-10 text-lg">Nuestra misión es democratizar el análisis médico mediante el uso de tecnología avanzada, ayudando a las personas a entender mejor su salud.</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Visión</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="ml-10 text-lg">Aspiramos a ser líderes en el análisis médico basado en IA, ayudando a millones de personas en todo el mundo a tomar decisiones informadas sobre su bienestar.</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Nuestro equipo</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="ml-10 text-lg">El equipo de HemoScan AI está compuesto por desarrolladores, científicos de datos y expertos médicos comprometidos en ofrecer la mejor experiencia posible.</li>
                            </li>
                        </ul>
                        <div className="flex justify-center gap-3">
                            <div className="mt-2 text-center">
                                <img src={("./src/assets/Perfil.jpg")} alt="Erick" className="object-cover w-20 h-20 mx-auto border-2 rounded-full item-center border-hover dark:border-hover-dark" />
                                <p>Erick</p>
                                <p>Desarrollador FullStack</p>
                            </div>
                            <div className="mt-2 text-center">
                                <img src={("./src/assets/Perfil.jpg")} alt="Nestor" className="object-cover w-20 h-20 mx-auto border-2 rounded-full border-hover dark:border-hover-dark" />
                                <p>Nestor</p>
                                <p>Desarrollador Frontend</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Tecnologías</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="ml-10 text-lg">Frontend: HTML5, Tailwind CSS, JavaScript, React</li>
                                <li className="ml-10 text-lg">Backend: Python, Flask/Django</li>
                                <li className="ml-10 text-lg">Base de Datos: MySQL o MongoDB</li>
                                <li className="ml-10 text-lg">Inteligencia Artificial: TensorFlow, PyTorch</li>
                                <li className="ml-10 text-lg">Procesamiento de Imágenes: OpenCV, PIL</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Nuestros valores</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="ml-10 text-lg">Innovación: Siempre buscamos nuevas formas de mejorar nuestro sistema.</li>
                                <li className="ml-10 text-lg">Precisión: Nos esforzamos por ofrecer resultados confiables y precisos.</li>
                                <li className="ml-10 text-lg">Privacidad: Protegemos los datos de nuestros usuarios con los más altos estándares de seguridad.</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">¿Cómo Empezamos?</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="ml-10 text-lg">HemoScan AI nació de la necesidad de ofrecer una herramienta accesible para que cualquier persona pueda analizar sus niveles de hemoglobina sin necesidad de equipos costosos o difíciles de manejar.</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Contacto</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <li className="mt-2 text-lg ">Correo electrónico: </li>
                                <li className="mt-2 text-lg">Redes sociales: </li>
                                <li className="mt-2 text-lg">Dirección física: </li>
                            </li>
                        </ul>
                        <form className="flex flex-col max-w-full gap-3 pt-5 text-center">
                            <input type="text" placeholder="Nombre" required className="w-full p-3 border-2 rounded-md hover:border-hover dark:hover:bg-hover-dark bg-background dark:bg-background-dark" />
                            <input type="email" placeholder="Correo electrónico" required className="w-full p-3 border-2 hover:border-hover dark:hover:bg-hover-darkrounded-md bg-background dark:bg-background-dark" />
                            <textarea placeholder="Mensaje" required className="w-full p-3 border-2 rounded-md hover:border-hover dark:hover:bg-hover-dark bg-background dark:bg-background-dark"></textarea>
                            <button className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;