import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import HFAQPage from './pages/HFAQPage'
import AboutPage from './pages/AboutPage'
import Dashboard from './pages/dashboard/Dashboard'
import SignupPage from './pages/SignupPage'
import { useGoogleAuth } from './auth/useGoogleAuth'

function App() {
  const { user } = useGoogleAuth()

  return (
    <Router>
      <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/hfaq' element={<HFAQPage />} />
          <Route path='/signup' element={<SignupPage />} />
          {user ? (
            <Route path='/dashboard' element={<Dashboard />} />
          ) : (
            <Route path='*' element={<ErrorPage />} />
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App