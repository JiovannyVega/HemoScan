import { loginWithGoogle, loginWithEmail, logout } from '../api/auth'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const handleTokenExpiration = (setError, navigate) => {
    setError('Token expirado. Por favor, inicie sesión nuevamente.')
    localStorage.removeItem('token')
    navigate('/login')
}

export const handleGoogleLogin = async (googleToken, setError, navigate) => {
    try {
        const response = await loginWithGoogle(googleToken)
        localStorage.setItem('token', response.token)
        navigate('/dashboard')
    } catch (err) {
        if (err.message === 'Token expirado') {
            handleTokenExpiration(setError, navigate)
        } else {
            setError(err.message)
        }
    }
}

export const handleEmailLogin = async (email, password, setError, navigate) => {
    try {
        const response = await loginWithEmail(email, password)
        localStorage.setItem('token', response.token)
        navigate('/dashboard')
    } catch (err) {
        if (err.message === 'Token expirado') {
            handleTokenExpiration(setError, navigate)
        } else {
            setError(err.message)
        }
    }
}

export const handleLogout = (navigate) => {
    logout()
    navigate('/')
}

export const isLoggedIn = () => {
    return !!getToken()
}