import { useState } from 'react'
import { googleLogout } from '@react-oauth/google'
import { loginWithGoogle } from '../api/auth'

const useGoogleAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      console.log('Credenciales de Google:', credentialResponse)
      const response = await loginWithGoogle(credentialResponse.credential)
      const userData = {
        nombre: response.user.nombre || '',
        apellido: response.user.apellido || '',
        email: response.user.email || '',
        edad: response.user.edad || '',
        sexo: response.user.sexo || '',
        telefono: response.user.telefono || '',
        picture: response.user.picture || '/assets/Perfil.jpg'
      }
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      console.log('Datos del usuario:', response.user)
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
export { useGoogleAuth }