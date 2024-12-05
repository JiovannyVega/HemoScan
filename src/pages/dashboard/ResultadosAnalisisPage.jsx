import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getResultadosAnalisis, getPersona } from '../../api/personas'
import { getValoresReferencia, getParametros } from '../../api/valores-referencia'

const ResultadosAnalisisPage = () => {
    const { personaId, analisisId } = useParams()
    const [resultados, setResultados] = useState([])
    const [valoresReferencia, setValoresReferencia] = useState([])
    const [parametros, setParametros] = useState([])
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

        const fetchValoresReferencia = async (ageGroupId) => {
            try {
                const data = await getValoresReferencia(ageGroupId)
                setValoresReferencia(data)
            } catch (err) {
                setError(err.message)
            }
        }

        const fetchParametros = async () => {
            try {
                const data = await getParametros()
                setParametros(data)
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

        const obtenerGrupoEdadId = (edad, sexo) => {
            if (edad <= 1) return 1
            if (edad <= 2) return 2
            if (edad <= 12) return 3
            if (edad <= 18) return 4
            if (edad <= 59) return sexo === 'M' ? 5 : 6
            return 7
        }

        const fetchAllData = async () => {
            await fetchResultados()
            const personaData = await getPersona(personaId)
            const edad = calcularEdad(personaData.fecha_nacimiento)
            const grupoEdadId = obtenerGrupoEdadId(edad, personaData.sexo)
            await fetchValoresReferencia(grupoEdadId)
            await fetchParametros()
        }

        fetchAllData()
    }, [personaId, analisisId])

    const obtenerValorReferencia = (valor_referencia_id) => {
        return valoresReferencia.find(valor => valor.id === valor_referencia_id)
    }

    const obtenerNombreParametro = (parametroId) => {
        const parametro = parametros.find(param => param.id === parametroId)
        return parametro ? parametro.nombre : 'Desconocido'
    }

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
                                <th className='px-4 py-2 border'>Parámetro</th>
                                <th className='px-4 py-2 border'>Valor</th>
                                <th className='px-4 py-2 border'>Rango Mínimo</th>
                                <th className='px-4 py-2 border'>Rango Máximo</th>
                                <th className='px-4 py-2 border'>Unidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.map(resultado => {
                                const valorReferencia = obtenerValorReferencia(resultado.valor_referencia_id)
                                return (
                                    <tr key={resultado.id} className='odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900'>
                                        <td className='px-4 py-2 border'>{obtenerNombreParametro(valorReferencia?.parametro_id)}</td>
                                        <td className='px-4 py-2 border'>{resultado.valor}</td>
                                        <td className='px-4 py-2 border'>{valorReferencia?.rango_minimo}</td>
                                        <td className='px-4 py-2 border'>{valorReferencia?.rango_maximo}</td>
                                        <td className='px-4 py-2 border'>{valorReferencia?.unidad}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div >
    )
}

export default ResultadosAnalisisPage