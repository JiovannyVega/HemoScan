import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import HFAQPage from './pages/HFAQPage'
import AboutPage from './pages/AboutPage'
import NavBar from './pages/dashboard/NavBar'
import SignupPage from './pages/SignupPage'
import { AuthProvider, useAuth } from './context/AuthProvider'
import ProfilePage from './pages/dashboard/ProfilePage'
import Analitycs from './pages/dashboard/Analitycs'
import DashboardContent from './pages/dashboard/DashboardContent'

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}

function AppContent() {
  const { isLoggedIn } = useAuth()

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/hfaq' element={<HFAQPage />} />
        <Route path='/signup' element={<SignupPage />} />
        {isLoggedIn() && (
          <Route path='/dashboard' element={<NavBar />}>
            <Route index element={<DashboardContent />} />
            <Route path='analitica' element={<Analitycs />} />
            <Route path='perfil' element={<ProfilePage />} />
          </Route>
        )}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App