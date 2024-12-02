import { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import AuthForm from '../components/AuthForm'

const LoginPage = () => {
  const { handleEmailLogin, handleGoogleLogin } = useAuth()
  const [formData, setFormData] = useState({ email: '', contrasena: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleEmailLogin(formData.email, formData.contrasena)
  }

  return (
    <AuthForm
      title='Iniciar sesión'
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      googleLoginHandler={handleGoogleLogin}
      isSignup={false}
    />
  )
}

export default LoginPage
