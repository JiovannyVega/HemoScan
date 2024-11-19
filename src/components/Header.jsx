import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Switch from 'react-switch' // Importa react-switch

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'))

  const toggleTheme = () => {
    setIsDarkMode(document.documentElement.classList.toggle('dark'))
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    ['Home', '/'],
    ['About us', '/about'],
    ['Login', '/Login'],
    ['HFAQ', '/hfaq'],
    ['Dashboard', '/dashboard']
  ]

  return (
    <header className='p-5 m-0 bg-gray-200 dark:bg-gray-800'>
      <div className='flex flex-row items-center justify-between max-w-6xl mx-auto shrink'>
        <div className='flex items-center mb-4 shrink-1 md:mb-0'>
          <img src='/assets/logo.png' alt='logo' className='w-10 mr-2' />
          <h1 className='text-2xl text-[#284B63] font-bold dark:text-white'>HemoScan AI</h1>
        </div>

        <nav className='hidden gap-4 shrink-1 sm:flex-row sm:flex'>
          {navItems.map(([title, url]) => (
            <Link key={url} to={url} className='font-semibold text-gray-800 hover:text-blue-500 active:text-blue-500 dark:text-gray-200'>
              {title}
            </Link>
          ))}
          <div className='relative inline-block w-10 align-middle transition duration-200 ease-in select-none'>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              onColor='#4B5563'
              offColor='#D1D5DB'
              onHandleColor='#FFFFFF'
              offHandleColor='#FFFFFF'
              handleDiameter={20}
              boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
              activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
              height={20}
              width={40}
            />
          </div>
        </nav>

        <div className='relative sm:hidden'>
          <button onClick={toggleMenu} className='p-2 text-gray-800 bg-gray-200 rounded-md dark:text-gray-200 dark:bg-gray-700'>
            {isMenuOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
          {isMenuOpen && (
            <nav className='absolute right-0 z-10 flex flex-col p-4 mt-2 space-y-2 bg-white border rounded-md shadow-lg dark:bg-gray-800'>
              {navItems.map(([title, url]) => (
                <Link key={url} to={url} className='font-semibold text-gray-800 hover:text-blue-500 active:text-blue-500 dark:text-gray-200'>
                  {title}
                </Link>
              ))}
            </nav>
          )}
          <div className='inline-block w-10 ml-4 align-middle transition duration-200 ease-in select-none'>
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              onColor='#4B5563'
              offColor='#D1D5DB'
              onHandleColor='#FFFFFF'
              offHandleColor='#FFFFFF'
              handleDiameter={20}
              boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
              activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
              height={20}
              width={40}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
