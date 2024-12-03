import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

// Incluir el token en las solicitudes
const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token')
    if (!token) {
        throw new Error('No token found')
    }

    const response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        }
    })
    if (response.status === 401) {
        throw new Error('Token expirado')
    }
    return response
}


export const loginWithGoogle = async (googleToken) => {
    try {
        const response = await axios.post(`${API_URL}/login/google`, { token: googleToken })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.error || 'Error al iniciar sesión con Google')
    }
}

export const loginWithEmail = async (email, contrasena) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, contrasena })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.error || 'Error al iniciar sesión')
    }
}

export const signup = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, formData)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.error || 'Error al registrar usuario')
    }
}

export const updateUser = async (formData) => {
    try {
        const response = await axios.put(`${API_URL}/users`, formData)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.error || 'Error al actualizar usuario')
    }
}

export const logout = () => {
    localStorage.removeItem('token')
}

export { fetchWithAuth }
