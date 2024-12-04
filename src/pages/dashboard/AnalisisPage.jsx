import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnalisis, createAnalisis } from '../../api/personas'

const AnalisisPage = () => {
    const { personaId } = useParams()
    const [analisis, setAnalisis] = useState([])
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
        fetchAnalisis()
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

    return (
        <div className='flex flex-col items-center h-full m-0 border-t-2 md:py-4 text-text dark:text-text-dark bg-background dark:bg-background-dark'>
            <div className='flex flex-col items-center w-full p-5 mb-0 overflow-scroll border rounded-lg shadow-xl no-scrollbar md:w-2/3 bg-background dark:bg-background-dark'>
                <h2 className='text-2xl font-bold'>Análisis de la Persona</h2>
                {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
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
                                <tr key={analisis.id} className='odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900'>
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