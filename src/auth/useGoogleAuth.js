import { useState } from 'react'
import { googleLogout } from '@react-oauth/google'
import axios from 'axios'

const useGoogleAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post('http://localhost:3000/login/google', {
        token: credentialResponse.credential // Usa credential en lugar de clientId
      })
      alert('Inicio de sesión con Google exitoso')
      const userData = {
        nombre: response.data.user.nombre || '',
        apellido: response.data.user.apellido || '',
        email: response.data.user.email || ''
      }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      console.log('Datos del usuario:', response.data.user)
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error)
      alert('Error al iniciar sesión con Google')
    }
  }

  const logOut = () => {
    googleLogout()
    setUser(null)
    localStorage.removeItem('user')
  }

  return { user, logOut, handleGoogleLoginSuccess }
}

export default useGoogleAuth
