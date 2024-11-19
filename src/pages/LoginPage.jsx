import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'
import useGoogleAuth from '../auth/useGoogleAuth'

const LoginPage = () => {
  const { handleGoogleLoginSuccess } = useGoogleAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', contrasena: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email: formData.email,
        contrasena: formData.contrasena
      })
      const userData = {
        email: formData.email,
        nombre: response.data.user.nombre,
        apellido: response.data.user.apellido
      }
      localStorage.setItem('user', JSON.stringify(userData))
      alert('Inicio de sesión exitoso')
      console.log('Datos del usuario:', response.data.user)
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      alert('Error al iniciar sesión')
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    await handleGoogleLoginSuccess(credentialResponse)
    navigate('/dashboard') // Redirigir al usuario a /dashboard
    window.location.reload()
  }

  return (
    <>
      <div className='flex flex-row h-full bg-gradient-to-b from-primary to-secondary'>
        <div className='items-center hidden w-1/2 sm:flex'>
          <img src='/assets/Intro.png' alt='Intro' className='h-250' />
        </div>
        <div className='flex flex-col items-center w-full h-full ml-auto sm:w-1/2 bg-background dark:bg-background-dark text-text dark:text-text-dark'>
          <div className='flex flex-row w-11/12 text-center border-b'>
            <div className='w-1/2 mt-5'>
              <Link to='/login' className='font-bold no-underline p-7'>Iniciar sesión</Link>
            </div>
            <div className='w-1/2 mt-5'>
              <Link to='/signup' className='ml-auto no-underline p-7'>Regístrate</Link>
            </div>
          </div>
          <h1 className='mt-4 text-2xl'>Iniciar sesión</h1>
          <div className='flex flex-col justify-center w-11/12 h-full p-7'>
            <form action='' className='flex flex-col justify-center h-auto' onSubmit={handleSubmit}>
              <img src='/assets/perfil-icono.png' className='self-center w-20 h-20 mb-4' alt='Perfil' />
              <label htmlFor='correo' className='sr-only'>Correo electrónico</label>
              <input type='email' className='p-3 my-5 mb-4 border rounded-md bg-background dark:bg-background-dark' placeholder='Correo electrónico' name='email' id='correo' value={formData.email} onChange={handleChange} required />
              <label htmlFor='contrasena' className='sr-only'>Contraseña</label>
              <input type='password' className='p-3 my-5 mb-4 border-2 rounded-md bg-background dark:bg-background-dark' placeholder='Contraseña' name='contrasena' id='contrasena' value={formData.contrasena} onChange={handleChange} required />
              <div className='flex flex-row'>
                <Link to='/forgot-password' className='my-4 text-left'>¿Olvidaste tu contraseña?</Link>
                <button className='w-1/2 p-3 mb-4 ml-auto text-white border-2 rounded-md bg-primary' type='submit'>Ingresar</button>
              </div>
              <p className='mb-4 text-center'>O</p>
            </form>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
