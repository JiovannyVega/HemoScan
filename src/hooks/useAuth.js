import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle, loginWithEmail, logout } from '../api/auth'

// Obtener el token del almacenamiento local
const getToken = () => {
    return localStorage.getItem('token')
}

const useAuth = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleGoogleLogin = async (googleToken) => {
        try {
            const response = await loginWithGoogle(googleToken)
            localStorage.setItem('token', response.token)
            navigate('/dashboard')
        } catch (err) {
            setError(err.message)
        }
    }

    const handleEmailLogin = async (email, password) => {
        try {
            const response = await loginWithEmail(email, password)
            localStorage.setItem('token', response.token)
            navigate('/dashboard')
        } catch (err) {
            setError(err.message)
        }
    }

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return { handleGoogleLogin, handleEmailLogin, handleLogout, error, getToken }
}

export default useAuth