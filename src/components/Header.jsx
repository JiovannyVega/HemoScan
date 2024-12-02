import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Switch from 'react-switch'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode')
    return savedTheme ? JSON.parse(savedTheme) : document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

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
            />
          </div>
        </nav>

        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className='flex flex-col gap-4 mt-4 sm:hidden'>
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
            />
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header