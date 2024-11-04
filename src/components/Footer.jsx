import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full p-5 text-sm font-bold text-center bg-gray-200 dark:bg-gray-800 text-text dark:text-text-dark'>
      <div className='flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row'>
        <div className='flex flex-wrap justify-center gap-4 mb-4 md:mb-0'>
          <Link to='/about' className='hover:underline hover:text-hover dark:hover:text-hover-dark'>
            Acerca de Nosotros
          </Link>
          <Link to='/hfaq' className='hover:underline hover:text-hover dark:hover:text-hover-dark'>
            Centro de Ayuda
          </Link>
        </div>
        <div>
          <p>© 2024 HemoScan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
