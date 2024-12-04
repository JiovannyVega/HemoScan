import { Outlet, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

const Dashboard = () => {
  const { handleLogout } = useAuth()

  const navItems = [
    ['Dashboard', '/dashboard'],
    ['Personas', '/dashboard/personas'],
    ['Analitycs', '/dashboard/analitica'],
    ['Profile', '/dashboard/perfil']
  ]

  return (
    <div className='flex h-full text-text dark:text-text-dark'>
      <nav className='flex flex-col flex-shrink w-1/5 border-t-2 border-r-2 min-h-max bg-background dark:bg-background-dark'>
        <h2 className='p-4 text-xl font-bold'>HemoScan</h2>
        <ul>
          {navItems.map(([title, url]) => (
            <li key={url}>
              <Link to={url} className='block w-full py-2 text-left group/nav hover:bg-hover dark:hover:bg-hover-dark'>
                <p className='mx-8 group-hover/nav:mx-14 '>{title}</p>
              </Link>
            </li>
          ))}
          <li>
            <button onClick={handleLogout} className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p className='mx-8'>Logout</p>
            </button>
          </li>
        </ul>
      </nav>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
