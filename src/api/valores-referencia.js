import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export const getAgeGroups = async () => {
    const response = await axios.get(`${API_URL}/age-groups`)
    if (response.status !== 200) {
        throw new Error('Error al obtener los grupos de edad')
    }
    return response.data
}

export const getFormulas = async () => {
    const response = await axios.get(`${API_URL}/formulas`)
    if (response.status !== 200) {
        throw new Error('Error al obtener las formulas')
    }
    return response.data
}

export const getParametros = async () => {
    const response = await axios.get(`${API_URL}/parameters`)
    if (response.status !== 200) {
        throw new Error('Error al obtener los parámetros')
    }
    return response.data
}

export const getValoresReferencia = async (ageGroupId) => {
    const response = await axios.get(`${API_URL}/reference-values/age-group/${ageGroupId}`)
    if (response.status !== 200) {
        throw new Error('Error al obtener los valores de referencia')
    }
    return response.data
}