import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export const getAgeGroups = async () => {
    const response = await axios.get(`${API_URL}/age-groups`)
    if (!response.ok) {
        throw new Error('Error al obtener los grupos de edad')
    }
    return response.data
}

export const getFormulas = async () => {
    const response = await axios.get(`${API_URL}/formulas`)
    if (!response.ok) {
        throw new Error('Error al obtener las formulas')
    }
    return response.data
}

export const parametros = async () => {
    const response = await axios.get(`${API_URL}/parameters`)
    if (!response.ok) {
        throw new Error('Error al obtener los parametros')
    }
    return response.data
}