import { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import AuthForm from '../components/AuthForm'

const SignupPage = () => {
  const { handleSignup, handleGoogleLogin, error, clearError } = useAuth()
  const [formData, setFormData] = useState({
    nombre_usuario: '',
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
    handleSignup({
      nombre_usuario: formData.nombre_usuario,
      email: formData.email,
      contrasena: formData.contrasena
    })
  }

  return (
    <AuthForm
      title='Registrar'
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      googleLoginHandler={handleGoogleLogin}
      isSignup={true}
      error={error}
      clearError={clearError}
    />
  )
}

export default SignupPage
