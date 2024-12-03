import { loginWithGoogle, loginWithEmail, logout, signup } from '../api/auth'

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
        localStorage.setItem('user', JSON.stringify(response.user))
        navigate('/dashboard')
    } catch (err) {
        if (err.message === 'Token expirado') {
            handleTokenExpiration(setError, navigate)
        } else {
            setError(err.message)
        }
    }
}

export const handleEmailLogin = async (email, contrasena, setError, navigate) => {
    try {
        const response = await loginWithEmail(email, contrasena)
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        navigate('/dashboard')
    } catch (err) {
        if (err.message === 'Token expirado') {
            handleTokenExpiration(setError, navigate)
        } else if (err.message === 'Usuario no encontrado') {
            setError('Usuario no encontrado')
        } else if (err.message === 'Contraseña incorrecta') {
            setError('Contraseña incorrecta')
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

export const handleSignup = async (formData, setError, navigate) => {
    try {
        const response = await signup(formData)
        localStorage.setItem('token', response.token)
        navigate('/login')
    } catch (err) {
        setError(err.message)
    }
}

export const getUser = () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}