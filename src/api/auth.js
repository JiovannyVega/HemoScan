import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export const loginWithGoogle = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/login/google`, { token })
        return response.data
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error)
        throw error
    }
}

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/logout`)
    } catch (error) {
        console.error('Error al cerrar sesión:', error)
        throw error
    }
}