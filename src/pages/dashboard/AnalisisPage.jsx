import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAnalisis, createAnalisis, getPersona } from '../../api/personas'

const AnalisisPage = () => {
    const { personaId } = useParams()
    const navigate = useNavigate()
    const [analisis, setAnalisis] = useState([])
    const [persona, setPersona] = useState(null)
    const [error, setError] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [newAnalisis, setNewAnalisis] = useState({
        fecha: '',
        descripcion: ''
    })

    useEffect(() => {
        const fetchAnalisis = async () => {
            try {
                const data = await getAnalisis(personaId)
                setAnalisis(data)
            } catch (err) {
                setError(err.message)
            }
        }

        const fetchPersona = async () => {
            try {
                const data = await getPersona(personaId)
                setPersona(data)
            } catch (err) {
                setError(err.message)
            }
        }

        fetchAnalisis()
        fetchPersona()
    }, [personaId])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewAnalisis({ ...newAnalisis, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createAnalisis(personaId, newAnalisis)
            setShowForm(false)
            const data = await getAnalisis(personaId)
            setAnalisis(data)
        } catch (err) {
            setError(err.message)
        }
    }

    const calcularEdad = (fechaNacimiento) => {
        const hoy = new Date()
        const nacimiento = new Date(fechaNacimiento)
        let edad = hoy.getFullYear() - nacimiento.getFullYear()
        const mes = hoy.getMonth() - nacimiento.getMonth()
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--
        }
        return edad
    }

    const obtenerGrupoEdad = (edad) => {
        if (edad <= 1) return 'Recién nacido'
        if (edad <= 2) return 'Niño (1-2 años)'
        if (edad <= 12) return 'Niño (2-12 años)'
        if (edad <= 18) return 'Adolescente (13-18 años)'
        if (edad <= 59) return 'Adulto'
        return 'Adulto mayor'
    }

    return (
        <div className='flex flex-col items-center h-full m-0 border-t-2 md:py-4 text-text dark:text-text-dark bg-background dark:bg-background-dark'>
            <div className='flex flex-col items-center w-full p-5 mb-0 overflow-scroll border rounded-lg shadow-xl no-scrollbar md:w-2/3 bg-background dark:bg-background-dark'>
                <h2 className='text-2xl font-bold'>Análisis de: {persona?.nombre} {persona?.apellido}</h2>
                {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
                {persona && (
                    <div className='mb-4'>
                        <p><strong>Nombre:</strong> {persona.nombre}</p>
                        <p><strong>Apellido:</strong> {persona.apellido}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {new Date(persona.fecha_nacimiento).toLocaleDateString()}</p>
                        <p><strong>Sexo:</strong> {persona.sexo === 'M' ? 'Hombre' : 'Mujer'}</p>
                        <p><strong>Edad:</strong> {calcularEdad(persona.fecha_nacimiento)} años</p>
                        <p><strong>Grupo de Edad:</strong> {obtenerGrupoEdad(calcularEdad(persona.fecha_nacimiento))}</p>
                    </div>
                )}
                {analisis.length === 0 ? (
                    <p className='mt-4 text-center'>No se encontraron analisis.</p>
                ) : (
                    <table className='w-full mt-4 text-center border-collapse table-auto'>
                        <thead>
                            <tr className='bg-gray-200 dark:bg-gray-700'>
                                <th className='px-4 py-2 border'>Descripcion</th>
                                <th className='px-4 py-2 border'>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analisis.map(analisis => (
                                <tr key={analisis.id} className='cursor-pointer odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900' onClick={() => navigate(`/dashboard/personas/${personaId}/analisis/${analisis.id}/resultados`)}>
                                    <td className='px-4 py-2 border'>{analisis.descripcion}</td>
                                    <td className='px-4 py-2 border'>{new Date(analisis.fecha).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <button onClick={() => setShowForm(true)} className='px-4 py-2 mt-4 text-white bg-blue-500 rounded'>Agregar Análisis</button>
                {showForm && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='p-4 bg-white rounded'>
                            <h2 className='mb-4 text-xl'>Agregar Análisis</h2>
                            <form onSubmit={handleSubmit}>
                                <label className='block'>Fecha del analisis (no la fecha actual)</label>
                                <input type='date' name='fecha' value={newAnalisis.fecha} onChange={handleInputChange} className='w-full p-2 mb-2 border rounded' required />
                                <textarea name='descripcion' placeholder='Descripción' value={newAnalisis.descripcion} onChange={handleInputChange} className='w-full p-2 mb-2 border rounded' required />
                                <button type='submit' className='px-4 py-2 text-white bg-green-500 rounded'>Guardar</button>
                                <button type='button' onClick={() => setShowForm(false)} className='px-4 py-2 ml-2 text-white bg-red-500 rounded'>Cancelar</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AnalisisPage