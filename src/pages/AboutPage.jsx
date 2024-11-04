const AboutPage = () => {
  return (
    <>
      <div className='flex flex-col items-center p-0 m-0 text-text dark:text-text-dark'>
        <section className="bg-[url('/assets/NHP.png')] bg-center bg-cover w-full h-96">
          <p className='mt-24 text-6xl text-center text-white'>Acerca de HemoScan AI</p>
          <p className='mt-2 text-2xl text-center text-white'>Análisis inteligente de hemoglobina para mejorar la salud</p>
        </section>
        <div className='flex flex-col items-center w-full p-5 mb-0 text-center rounded-lg sm:-mt-24 sm:w-4/5 bg-background dark:bg-background-dark'>
          <div className='w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark'>
            <h2 className='text-2xl'>Breve resumen</h2>
            <ul className='my-5 text-left'>
              <li className='ml-10 text-lg'>HemoScan AI es un sistema experto impulsado por inteligencia artificial diseñado para analizar imágenes de exámenes de hemoglobina, ofreciendo resultados precisos y recomendaciones de salud. Nuestro objetivo es facilitar el acceso a información médica relevante y precisa, ayudando a los usuarios a monitorear su salud de manera más eficiente.</li>
            </ul>
          </div>
          <div className='w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark'>
            <h2 className='text-2xl'>Misión</h2>
            <ul className='my-5 text-left'>
              <li className='ml-10 text-lg'>Nuestra misión es democratizar el análisis médico mediante el uso de tecnología avanzada, ayudando a las personas a entender mejor su salud.</li>
            </ul>
          </div>
          <div className='w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark'>
            <h2 className='text-2xl'>Visión</h2>
            <ul className='my-5 text-left'>
              <li className='ml-10 text-lg'>Aspiramos a ser líderes en el análisis médico basado en IA, ayudando a millones de personas en todo el mundo a tomar decisiones informadas sobre su bienestar.</li>
            </ul>
          </div>
          <div className='w-3/4 p-10 my-5 text-xl border-2 rounded-lg border-hover dark:border-hover-dark'>
            <h2 className='text-2xl'>Nuestro equipo</h2>
            <ul className='my-5 text-left'>
              <li className='ml-10 text-lg'>El equipo de HemoScan AI está compuesto por desarrolladores, científicos de datos y expertos médicos comprometidos en ofrecer la mejor experiencia posible.</li>
            </ul>
            <div className='flex justify-center gap-3'>
              <div className='mt-2 text-center'>
                <img src='/assets/Perfil.jpg' alt='Erick' className='object-cover w-20 h-20 mx-auto border-2 rounded-full item-center border-hover dark:border-hover-dark' />
                <p>Erick</p>
                <p>Desarrollador FullStack</p>
              </div>
              <div className='mt-2 text-center'>
                <img src='/assets/Perfil.jpg' alt='Nestor' className='object-cover w-20 h-20 mx-auto border-2 rounded-full border-hover dark:border-hover-dark' />
                <p>Nestor</p>
                <p>Desarrollador FullStack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
