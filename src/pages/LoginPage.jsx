import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import useGoogleAuth from '../auth/useGoogleAuth'
import { GoogleLogin } from '@react-oauth/google'

const LoginPage = () => {
  const { profile, logOut } = useGoogleAuth()
  const [formData, setFormData] = useState({ email: '', contrasena: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: formData.email,
        contrasena: formData.contrasena
      })
      alert('Inicio de sesión exitoso')
      console.log(response.data)
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      alert('Error al iniciar sesión')
    }
  }

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
          {profile
            ? (
              <div className='flex flex-col h-full p-7'>
                <img src={profile.picture} alt='Profile' className='w-40 h-40 mb-5 bg-cover border-4 rounded-full border-hover dark:border-hover-dark' />
                <h2 className='m-5 text-2xl font-bold'>{profile.name}</h2>
                <p className='m-0 overflow-hidden font-bold'>{profile.email}</p>
                <button className='p-2 m-5 text-white rounded-md bg-primary hover:bg-secondary' onClick={logOut}>Cerrar sesión</button>
              </div>
            )
            : (
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
                  onSuccess={handleGoogleLoginSuccess}
                  onError={() => {
                    console.log('Login Failed')
                  }}
                />
              </div>
            )}
        </div>
      </div>
    </>
  )
}

export default LoginPage
