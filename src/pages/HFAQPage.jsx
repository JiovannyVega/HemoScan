import React from 'react'

const HFAQPage = () => {
    return (
        <>
            <div className="flex flex-col items-center p-0 m-0 text-text dark:text-text-dark">
                <section className="bg-[url('./src/assets/NHP.png')] bg-center bg-cover w-full h-96">
                    <p className="mt-20 mb-5 text-6xl text-center text-white">¿Como podemos ayudarte?</p>
                    <form class="max-w-md mx-auto">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </section>
                <div className="flex flex-col items-center w-4/5 p-5 mb-0 -m-24 text-center rounded-lg bg-background dark:bg-background-dark">
                    <p className="my-5 text-4xl">Centro de ayuda y preguntas frecuentes</p>
                    <p className="w-3/4 my-5 text-lg">Aqui encontraras respuestas a las preguntas mas comunes sobre HemoScan y como utilizarlo. Si no encuentras lo que buscas, no dudes en contactarnos</p>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">General</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <strong>Pregunta 1:</strong>Que es HemoScan?
                                <li className="ml-10 text-lg">Respuesta: HemoScan es una herramienta que utiliza inteligencia artificial para analizar tus examenes de hemoglobina y ofrecerte resultados precisos y recomendaciones personalizadas</li>
                            </li>
                            <li className="my-5">
                                <strong>Pregunta 2:</strong>¿Cómo funciona HemoScan?
                                <li className="ml-10 text-lg">Respuesta: Respuesta: Solo necesitas subir una imagen de tu examen médico de hemoglobina y HemoScan la analizará para determinar si tus niveles son normales, bajos o altos. También recibirás consejos para mejorar tu salud.</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Cuenta y seguridad</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <strong>Pregunta 1:</strong>¿Cómo puedo crear una cuenta?
                                <li className="ml-10 text-lg">Respuesta: Puedes crear una cuenta haciendo clic en 'Registrarse' en la página principal y completando el formulario con tus datos personales.</li>
                            </li>
                            <li className="my-5">
                                <strong>Pregunta 2:</strong>¿Cómo cambio mi contraseña?
                                <li className="ml-10 text-lg">Respuesta: En tu página de perfil, encontrarás una sección de 'Seguridad' donde podrás cambiar tu contraseña fácilmente</li>
                            </li>
                            <li className="my-5">
                                <strong>Pregunta 3:</strong>¿Es segura la información que subo a HemoScan?
                                <li className="ml-10 text-lg">Respuesta: Sí, todos los datos subidos a HemoScan están protegidos con medidas de seguridad avanzadas y son tratados de manera confidencial.</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Examenes y resultados</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <strong>Pregunta 1:</strong>¿Cómo subo un examen de hemoglobina?
                                <li className="ml-10 text-lg">Respuesta: En la página principal, haz clic en 'Subir Examen de Hemoglobina', selecciona la imagen de tu examen desde tu dispositivo, y HemoScan hará el análisis por ti.</li>
                            </li>
                            <li className="my-5">
                                <strong>Pregunta 2:</strong>¿Qué tipo de imágenes acepta HemoScan?
                                <li className="ml-10 text-lg">Respuesta: Aceptamos imágenes en formatos comunes como JPG, PNG, y PDF.</li>
                            </li>
                            <li className="my-5">
                                <strong>Pregunta 3:</strong>¿Cuánto tiempo tarda en analizar mi examen?
                                <li className="ml-10 text-lg">Respuesta: El análisis suele tomar solo unos segundos. Recibirás los resultados casi de inmediato</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">Contacto y soporte</h>
                        <ul className="my-5 text-left">
                            <li className="my-5">
                                <strong>Pregunta 1:</strong>¿Cómo puedo contactar al soporte?
                                <li className="ml-10 text-lg">Respuesta: "Si tienes alguna duda o problema, puedes enviarnos un mensaje a través de nuestro formulario de contacto o escribirnos a (correo@hemoscan.com]."</li>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
                        <h className="text-2xl">¿Algo más?</h>
                        <ul className="my-5 text-center">
                            <p>¿No encontraste lo que buscabas?</p>
                            <li>
                                <button className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary ">Contáctanos</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HFAQPage;
