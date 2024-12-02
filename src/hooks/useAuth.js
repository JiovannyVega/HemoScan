import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { loginWithGoogle, loginWithEmail } from '../api/auth'

const useAuth = () => {
    const [error, setError] = useState(null)
    const history = useHistory()

    const handleGoogleLogin = async (googleToken) => {
        try {
            const response = await loginWithGoogle(googleToken)
            localStorage.setItem('token', response.token)
            history.push('/dashboard')
        } catch (err) {
            setError(err.message)
        }
    }

    const handleEmailLogin = async (email, password) => {
        try {
            const response = await loginWithEmail(email, password)
            localStorage.setItem('token', response.token)
            history.push('/dashboard')
        } catch (err) {
            setError(err.message)
        }
    }

    return { handleGoogleLogin, handleEmailLogin, error }
}

export default useAuth