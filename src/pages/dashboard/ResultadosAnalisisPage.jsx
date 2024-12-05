import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useResultadosAnalisis from '../../hooks/useResultadosAnalisis'

const ResultadosAnalisisPage = () => {
    const { personaId, analisisId } = useParams()
    const {
        resultados,
        valoresReferencia,
        parametros,
        formulas,
        error,
        persona,
        calcularEdad,
        obtenerGrupoEdad,
        obtenerValorReferencia,
        obtenerNombreParametro,
        obtenerNombreFormula,
        obtenerValorExistente,
        handleInputChange,
        handleSubmit,
        esValorFueraDeRango,
        handleValorClick,
        newValores,
    } = useResultadosAnalisis(personaId, analisisId)

    const [showForm, setShowForm] = useState(false)
    const [selectedParametro, setSelectedParametro] = useState(null)
    const [selectedValor, setSelectedValor] = useState(null)
    const [selectedExplicacion, setSelectedExplicacion] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

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
                        <p><strong>Grupo de Edad:</strong> {obtenerGrupoEdad(calcularEdad(persona.fecha_nacimiento))}</p>
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
                                        const fueraDeRango = esValorFueraDeRango(resultado.valor, parseFloat(valorReferencia?.rango_minimo), parseFloat(valorReferencia?.rango_maximo))
                                        return (
                                            <tr key={resultado.id} className='odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700'>
                                                <td className='px-4 py-2 border'>{obtenerNombreParametro(valorReferencia?.parametro_id)}</td>
                                                <td
                                                    className={`px-4 py-2 border ${fueraDeRango ? 'cursor-pointer text-red-500 font-bold' : ''}`}
                                                    onClick={() => fueraDeRango && handleValorClick(valorReferencia?.parametro_id, resultado.valor, parseFloat(valorReferencia?.rango_minimo), parseFloat(valorReferencia?.rango_maximo), setSelectedParametro, setSelectedValor, setSelectedExplicacion, setShowPopup)}
                                                >
                                                    {resultado.valor}
                                                </td>
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
                {showPopup && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='w-1/2 p-4 bg-white rounded dark:bg-gray-800'>
                            <h3 className='text-xl font-bold'>{selectedParametro}</h3>
                            <p><strong>Valor:</strong> {selectedValor}</p>
                            <p>{selectedExplicacion}</p>
                            <button onClick={() => setShowPopup(false)} className='px-4 py-2 mt-4 text-white bg-blue-500 rounded'>Cerrar</button>
                        </div>
                    </div>
                )}
                <button onClick={() => setShowForm(true)} className='px-4 py-2 mt-4 text-white bg-blue-500 rounded'>Agregar Valores de Referencia</button>
                {showForm && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='h-full p-4 overflow-scroll bg-white rounded dark:bg-gray-800'>
                            <h2 className='mb-4 text-xl'>Agregar Valores de Referencia</h2>
                            <form onSubmit={(e) => handleSubmit(e, setShowForm)} className='grid grid-cols-1 gap-4 md:grid-cols-2'>
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
                                                className='w-full p-2 border rounded dark:bg-gray-700 dark:text-white'
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