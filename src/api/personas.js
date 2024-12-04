import { fetchWithAuth } from './auth'

const API_URL = 'http://localhost:3000/api'

export const getPersonas = async () => {
    const response = await fetchWithAuth(`${API_URL}/persons`)
    if (!response.ok) {
        throw new Error('Error al obtener los datos de las personas')
    }
    return response.json()
}

export const createPersona = async (persona) => {
    try {
        const response = await fetchWithAuth(`${API_URL}/persons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(persona)
        })
        if (!response.ok) {
            throw new Error('Error al crear la persona')
        }
        return response.json()
    } catch (error) {
        throw new Error(error.message || 'Error al crear la persona')
    }
}

export const getAnalisis = async (personaId) => {
    const response = await fetchWithAuth(`${API_URL}/personas/${personaId}/analyses`)
    if (!response.ok) {
        throw new Error('Error al obtener los análisis')
    }
    return response.json()
}

export const createAnalisis = async (personaId, analisis) => {
    try {
        const response = await fetchWithAuth(`${API_URL}/analyses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ persona_id: personaId, ...analisis })
        })
        if (!response.ok) {
            throw new Error('Error al crear el análisis')
        }
        return response.json()
    } catch (error) {
        throw new Error(error.message || 'Error al crear el análisis')
    }
}

export const getResultadosAnalisis = async (analisisId) => {
    const response = await fetchWithAuth(`${API_URL}/analysis-results/analisis/${analisisId}`)
    if (!response.ok) {
        throw new Error('Error al obtener los resultados del análisis')
    }
    return response.json()
}