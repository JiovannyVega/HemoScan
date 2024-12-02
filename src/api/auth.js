import axios from 'axios'

// Incluir el token en las solicitudes
const fetchWithAuth = (url, options = {}) => {
    const token = localStorage.getItem('token')
    if (!token) {
        throw new Error('No token found')
    }

    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 401) {
            throw new Error('Token expirado')
        }
        return response
    })
}

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

export { fetchWithAuth }
