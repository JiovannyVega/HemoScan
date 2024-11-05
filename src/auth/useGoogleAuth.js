import { useState } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const useGoogleAuth = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const response = await axios.post('http://localhost:3000/login/google', {
          token: credentialResponse.credential
        })
        setUser(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))
      } catch (error) {
        console.error('Error al iniciar sesión con Google:', error)
      }
    },
    onError: (error) => console.log('Login Failed:', error),
  })

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post('http://localhost:3000/login/google', {
        token: credentialResponse.credential // Usa credential en lugar de clientId
      })
      alert('Inicio de sesión con Google exitoso')
      console.log(response.data)
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

  return { user, login, logOut, handleGoogleLoginSuccess }
}

export default useGoogleAuth
