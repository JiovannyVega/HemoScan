
import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle, loginWithEmail, logout } from '../api/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const getToken = () => {
        return localStorage.getItem('token')
    }

    const handleTokenExpiration = () => {
        setError('Token expirado. Por favor, inicie sesión nuevamente.')
        localStorage.removeItem('token')
        navigate('/login')
    }

    const handleGoogleLogin = async (googleToken) => {
        try {
            const response = await loginWithGoogle(googleToken)
            localStorage.setItem('token', response.token)
            navigate('/dashboard')
        } catch (err) {
            if (err.message === 'Token expirado') {
                handleTokenExpiration()
            } else {
                setError(err.message)
            }
        }
    }

    const handleEmailLogin = async (email, password) => {
        try {
            const response = await loginWithEmail(email, password)
            localStorage.setItem('token', response.token)
            navigate('/dashboard')
        } catch (err) {
            if (err.message === 'Token expirado') {
                handleTokenExpiration()
            } else {
                setError(err.message)
            }
        }
    }

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const isLoggedIn = () => {
        return !!getToken()
    }

    return (
        <AuthContext.Provider value={{ handleGoogleLogin, handleEmailLogin, handleLogout, error, getToken, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useAuth = () => {
    return useContext(AuthContext)
}