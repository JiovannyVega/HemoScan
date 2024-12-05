import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getResultadosAnalisis, getPersona, createResultadoAnalisis } from '../../api/personas'
import { getValoresReferencia, getParametros, getFormulas } from '../../api/valores-referencia'

const ResultadosAnalisisPage = () => {
    const { personaId, analisisId } = useParams()
    const [resultados, setResultados] = useState([])
    const [valoresReferencia, setValoresReferencia] = useState([])
    const [parametros, setParametros] = useState([])
    const [formulas, setFormulas] = useState([])
    const [error, setError] = useState(null)
    const [persona, setPersona] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [newValores, setNewValores] = useState({})

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

    const obtenerGrupoEdad = (edad) => {
        if (edad <= 1) return 'Recién nacido'
        if (edad <= 2) return 'Niño (1-2 años)'
        if (edad <= 12) return 'Niño (2-12 años)'
        if (edad <= 18) return 'Adolescente (13-18 años)'
        if (edad <= 59) return 'Adulto'
        return 'Adulto mayor'
    }

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

    const fetchFormulas = async () => {
        try {
            const data = await getFormulas()
            setFormulas(data)
        } catch (err) {
            setError(err.message)
        }
    }

    const fetchAllData = async () => {
        await fetchResultados()
        const personaData = await getPersona(personaId)
        setPersona(personaData)
        const edad = calcularEdad(personaData.fecha_nacimiento)
        const grupoEdadId = obtenerGrupoEdadId(edad, personaData.sexo)
        await fetchValoresReferencia(grupoEdadId)
        await fetchParametros()
        await fetchFormulas()
    }

    useEffect(() => {
        fetchAllData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [personaId, analisisId])

    const obtenerValorReferencia = (valor_referencia_id) => {
        return valoresReferencia.find(valor => valor.id === valor_referencia_id)
    }

    const obtenerNombreParametro = (parametroId) => {
        const parametro = parametros.find(param => param.id === parametroId)
        return parametro ? parametro.nombre : 'Desconocido'
    }

    const obtenerNombreFormula = (formulaId) => {
        const formula = formulas.find(form => form.id === formulaId)
        return formula ? formula.nombre : 'Desconocida'
    }

    const obtenerValorExistente = (parametroId) => {
        const resultado = resultados.find(res => {
            const valorReferencia = obtenerValorReferencia(res.valor_referencia_id)
            return valorReferencia?.parametro_id === parametroId
        })
        return resultado ? resultado.valor : ''
    }

    const handleInputChange = (e, parametroId) => {
        const { value } = e.target
        setNewValores({ ...newValores, [parametroId]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            for (const parametroId in newValores) {
                const valor = parseFloat(newValores[parametroId])
                const valorReferencia = valoresReferencia.find(vr => vr.parametro_id === parseInt(parametroId))
                if (valorReferencia && !isNaN(valor)) {
                    await createResultadoAnalisis(analisisId, {
                        valor_referencia_id: valorReferencia.id,
                        valor: valor
                    })
                }
            }
            setShowForm(false)
            await fetchAllData()
        } catch (err) {
            setError(err.message)
        }
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
                {persona && (
                    <div className='mb-4'>
                        <p><strong>Nombre:</strong> {persona.nombre}</p>
                        <p><strong>Apellido:</strong> {persona.apellido}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {new Date(persona.fecha_nacimiento).toLocaleDateString()}</p>
                        <p><strong>Sexo:</strong> {persona.sexo === 'M' ? 'Hombre' : 'Mujer'}</p>
                        <p><strong>Edad:</strong> {calcularEdad(persona.fecha_nacimiento)} años</p>
                        <p><strong>Grupo de Edad:</strong> {obtenerGrupoEdad(calcularEdad(persona.fecha_nacimiento), persona.sexo)}</p>
                    </div>
                )}
                {resultados.length === 0 ? (
                    <p className='mt-4 text-center'>No se encontraron resultados.</p>
                ) : (
                    formulas.map(formula => (
                        <div key={formula.id} className='w-full mt-4'>
                            <h3 className='text-xl font-bold'>{obtenerNombreFormula(formula.id)}</h3>
                            <table className='w-full mt-2 text-center border-collapse table-auto'>
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
                                    {resultados.filter(resultado => {
                                        const valorReferencia = obtenerValorReferencia(resultado.valor_referencia_id)
                                        const parametro = parametros.find(param => param.id === valorReferencia?.parametro_id)
                                        return parametro?.formula_id === formula.id
                                    }).map(resultado => {
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
                        </div>
                    ))
                )}
                <button onClick={() => setShowForm(true)} className='px-4 py-2 mt-4 text-white bg-blue-500 rounded'>Agregar Valores de Referencia</button>
                {showForm && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='h-full p-4 overflow-scroll bg-white rounded'>
                            <h2 className='mb-4 text-xl'>Agregar Valores de Referencia</h2>
                            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                                {parametros.map(parametro => {
                                    const valorReferencia = valoresReferencia.find(vr => vr.parametro_id === parametro.id)
                                    return (
                                        <div key={parametro.id} className='mb-2'>
                                            <label className='block'>{parametro.nombre} ({valorReferencia?.unidad})</label>
                                            <input
                                                type='number'
                                                step='any'
                                                value={newValores[parametro.id] || obtenerValorExistente(parametro.id)}
                                                onChange={(e) => handleInputChange(e, parametro.id)}
                                                className='w-full p-2 border rounded'
                                            />
                                        </div>
                                    )
                                })}
                                <div className='flex justify-end col-span-1 md:col-span-2'>
                                    <button type='submit' className='px-4 py-2 text-white bg-green-500 rounded'>Guardar</button>
                                    <button type='button' onClick={() => setShowForm(false)} className='px-4 py-2 ml-2 text-white bg-red-500 rounded'>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default ResultadosAnalisisPage