import { Link, } from 'react-router-dom'
import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useGoogleAuth } from '../auth/useGoogleAuth'
import axios from 'axios'

const SignupPage = () => {
  const { handleGoogleLoginSuccess } = useGoogleAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    confirmaContrasena: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.contrasena !== formData.confirmaContrasena) {
      alert('Las contraseñas no coinciden')
      return
    }
    console.log('Datos del formulario:', formData)
    try {
      await axios.post('http://localhost:3000/api/usuarios', {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        contrasena: formData.contrasena
      })
      const userData = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email
      }
      localStorage.setItem('user', JSON.stringify(userData))
      alert('Usuario registrado con éxito')
    } catch (error) {
      console.error('Error al registrar usuario:', error)
      console.error('Detalles del error:', error.response ? error.response.data : error.message)
      alert('Error al registrar usuario')
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    await handleGoogleLoginSuccess(credentialResponse)
    navigate('/dashboard') // Redirigir al usuario a /dashboard
    window.location.reload()
  }

  return (
    <>
      <div className='flex flex-row h-auto bg-gradient-to-b from-primary to-secondary'>
        <div className='items-center hidden w-1/2 sm:flex'>
          <img src='/assets/Intro.png' alt='Intro' className='h-250' />
        </div>
        <div className='flex flex-col items-center w-full h-full ml-auto sm:w-1/2 bg-background dark:bg-background-dark text-text dark:text-text-dark'>
          <div className='flex flex-row w-11/12 text-center border-b'>
            <div className='w-1/2 mt-5'>
              <Link to='/login' className='no-underline p-7'>Iniciar sesión</Link>
            </div>
            <div className='w-1/2 mt-5'>
              <Link to='/signup' className='ml-auto font-bold no-underline p-7'> Registrate</Link>
            </div>
          </div>
          <p className='mt-4 text-2xl'>Registrar</p>
          <img src='/assets/perfil-icono.png' className='self-center w-20 h-20 mt-5 mb-4' alt='perfil' />
          <p className=''>
            Regístrate ahora y obtén acceso completo a nuestra aplicación.
          </p>
          <form className='flex flex-col w-11/12 h-max p-7' onSubmit={handleSubmit}>
            <div className='flex flex-row justify-center w-auto'>
              <input required placeholder='Nombre(s)' type='text' name='nombre' value={formData.nombre} onChange={handleChange} className='w-1/2 p-3 mb-4 mr-1 border rounded-md bg-background dark:bg-background-dark' />
              <input required placeholder='Apellido' type='text' name='apellido' value={formData.apellido} onChange={handleChange} className='w-1/2 p-3 mb-4 border rounded-md bg-background dark:bg-background-dark' />
            </div>
            <label>
              <input required placeholder='Correo' type='text' name='email' value={formData.email} onChange={handleChange} className='w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark' />
            </label>
            <label>
              <input
                required
                placeholder='Contrasena'
                type='password'
                name='contrasena'
                value={formData.contrasena}
                onChange={handleChange}
                className='w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark'
              />
            </label>
            <label>
              <input
                required
                placeholder='Confirma tu contrasena'
                type='password'
                name='confirmaContrasena'
                value={formData.confirmaContrasena}
                onChange={handleChange}
                className='w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark'
              />
            </label>
            <button className='p-3 mb-0 text-white border-2 rounded-md bg-primary' type='submit'>Ingresar</button>
          </form>
          <p className='mb-0'>O</p>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log('Login Failed')
            }}
          />
        </div>
      </div>
    </>
  )
}

export default SignupPage
