import { fetchWithAuth } from './auth'

const API_URL = 'http://localhost:3000/api'

export const getPersonas = async () => {
    const response = await fetchWithAuth(`${API_URL}/persons`)
    if (!response.ok) {
        throw new Error('Error al obtener los datos de las personas')
    }
    return response.json()
}