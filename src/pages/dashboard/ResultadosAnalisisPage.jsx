import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getResultadosAnalisis } from '../../api/personas'

const ResultadosAnalisisPage = () => {
    const { personaId, analisisId } = useParams()
    const [resultados, setResultados] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResultados = async () => {
            try {
                const data = await getResultadosAnalisis(analisisId)
                setResultados(data)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchResultados()
    }, [analisisId])

    return (
        <div className='flex flex-col items-center h-full m-0 border-t-2 md:py-4 text-text dark:text-text-dark bg-background dark:bg-background-dark'>
            <div className='flex flex-col items-center w-full p-5 mb-0 overflow-scroll border rounded-lg shadow-xl no-scrollbar md:w-2/3 bg-background dark:bg-background-dark'>
                <nav className='w-full mb-4'>
                    <Link to='/dashboard/personas' className='text-blue-500 hover:underline'>Personas</Link> &gt;
                    <Link to={`/dashboard/personas/${personaId}/analisis`} className='text-blue-500 hover:underline'> Análisis</Link> &gt;
                    <Link to={`/dashboard/personas/${personaId}/analisis/${analisisId}/resultados`} className='text-blue-500 hover:underline'> Resultados</Link>
                </nav>
                <h2 className='text-2xl font-bold'>Resultados del Análisis</h2>
                {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
                {resultados.length === 0 ? (
                    <p className='mt-4 text-center'>No se encontraron resultados.</p>
                ) : (
                    <table className='w-full mt-4 text-center border-collapse table-auto'>
                        <thead>
                            <tr className='bg-gray-200 dark:bg-gray-700'>
                                <th className='px-4 py-2 border'>ID</th>
                                <th className='px-4 py-2 border'>Valor</th>
                                <th className='px-4 py-2 border'>Fecha de Creación</th>
                                <th className='px-4 py-2 border'>Última Actualización</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.map(resultado => (
                                <tr key={resultado.id} className='odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900'>
                                    <td className='px-4 py-2 border'>{resultado.id}</td>
                                    <td className='px-4 py-2 border'>{resultado.valor}</td>
                                    <td className='px-4 py-2 border'>{new Date(resultado.createdAt).toLocaleDateString()}</td>
                                    <td className='px-4 py-2 border'>{new Date(resultado.updatedAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default ResultadosAnalisisPage