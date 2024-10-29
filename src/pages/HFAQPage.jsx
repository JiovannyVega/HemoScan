const HFAQPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-0 m-0 text-text dark:text-text-dark">
        <section className="bg-[url('/assets/NHP2.png')] bg-cover w-full h-96">
          <p className="mt-20 mb-5 text-6xl text-center text-white">¿Cómo podemos ayudarte?</p>
          <form className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
            </div>
          </form>
        </section>
        <div className="flex flex-col items-center w-full p-5 mb-0 text-center rounded-lg sm:-mt-24 sm:w-4/5 bg-background dark:bg-background-dark">
          <p className="my-5 text-4xl">Centro de ayuda y preguntas frecuentes</p>
          <p className="w-3/4 my-5 text-lg">Aquí encontrarás respuestas a las preguntas más comunes sobre HemoScan y cómo utilizarlo. Si no encuentras lo que buscas, no dudes en contactarnos.</p>
          <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
            <h2 className="text-2xl">General</h2>
            <ul className="my-5 text-left">
              <li className="my-5">
                <strong>Pregunta 1:</strong> ¿Qué es HemoScan?
                <ul className="ml-10 text-lg">
                  <li>Respuesta: HemoScan es una herramienta que utiliza inteligencia artificial para analizar tus exámenes de hemoglobina y ofrecerte resultados precisos y recomendaciones personalizadas.</li>
                </ul>
              </li>
              <li className="my-5">
                <strong>Pregunta 2:</strong> ¿Cómo funciona HemoScan?
                <ul className="ml-10 text-lg">
                  <li>Respuesta: Solo necesitas subir una imagen de tu examen médico de hemoglobina y HemoScan la analizará para determinar si tus niveles son normales, bajos o altos. También recibirás consejos para mejorar tu salud.</li>
                </ul>
              </li>
              <li className="my-5">
                <strong>Pregunta 3:</strong> ¿Qué formatos de imagen acepta HemoScan?
                <ul className="ml-10 text-lg">
                  <li>Respuesta: Aceptamos imágenes en formatos comunes como JPG, PNG, y PDF.</li>
                </ul>
              </li>
              <li className="my-5">
                <strong>Pregunta 4:</strong> ¿Cuánto tiempo tarda en analizar mi examen?
                <ul className="ml-10 text-lg">
                  <li>Respuesta: El análisis suele tomar solo unos segundos. Recibirás los resultados casi de inmediato.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
            <h2 className="text-2xl">Contacto y soporte</h2>
            <ul className="my-5 text-left">
              <li className="my-5">
                <strong>Pregunta 1:</strong> ¿Cómo puedo contactar al soporte?
                <ul className="ml-10 text-lg">
                  <li>Respuesta: Si tienes alguna duda o problema, puedes enviarnos un mensaje a través de nuestro formulario de contacto o escribirnos a correo@hemoscan.com.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark">
            <h2 className="text-2xl">¿Algo más?</h2>
            <ul className="my-5 text-center">
              <li>
                <p>¿No encontraste lo que buscabas?</p>
              </li>
              <li>
                <button className="p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary">Contáctanos</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HFAQPage;