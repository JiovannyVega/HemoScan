import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export const loginWithGoogle = async (googleToken) => {
    try {
        const response = await axios.post(`${API_URL}/login/google`, { token: googleToken })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.error || 'Error al iniciar sesión con Google')
    }
}

export const loginWithEmail = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.error || 'Error al iniciar sesión')
    }
}

export const logout = () => {
    localStorage.removeItem('token')
}
