import { useState, useEffect } from 'react'
import { getResultadosAnalisis, getPersona, createResultadoAnalisis, updateResultadoAnalisis } from '../api/personas'
import { getValoresReferencia, getParametros, getFormulas } from '../api/valores-referencia'
import parametrosExplicacion from '../data/parametrosExplicacion'

const useResultadosAnalisis = (personaId, analisisId) => {
    const [resultados, setResultados] = useState([])
    const [valoresReferencia, setValoresReferencia] = useState([])
    const [parametros, setParametros] = useState([])
    const [formulas, setFormulas] = useState([])
    const [error, setError] = useState(null)
    const [persona, setPersona] = useState(null)
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

    const handleSubmit = async (e, setShowForm) => {
        e.preventDefault()
        try {
            for (const parametroId in newValores) {
                const valor = parseFloat(newValores[parametroId])
                const valorReferencia = valoresReferencia.find(vr => vr.parametro_id === parseInt(parametroId))
                if (valorReferencia && !isNaN(valor)) {
                    const resultadoExistente = resultados.find(res => {
                        const vr = obtenerValorReferencia(res.valor_referencia_id)
                        return vr?.parametro_id === parseInt(parametroId)
                    })
                    if (resultadoExistente) {
                        await updateResultadoAnalisis(resultadoExistente.id, {
                            valor_referencia_id: valorReferencia.id,
                            valor: valor
                        })
                    } else {
                        await createResultadoAnalisis(analisisId, {
                            valor_referencia_id: valorReferencia.id,
                            valor: valor
                        })
                    }
                }
            }
            setShowForm(false)
            await fetchAllData()
        } catch (err) {
            setError(err.message)
        }
    }

    const esValorFueraDeRango = (valor, rangoMinimo, rangoMaximo) => {
        return valor < rangoMinimo || valor > rangoMaximo
    }

    const handleValorClick = (parametroId, valor, rangoMinimo, rangoMaximo, setSelectedParametro, setSelectedValor, setSelectedExplicacion, setShowPopup) => {
        const parametro = parametros.find(param => param.id === parametroId)
        const explicacion = parametrosExplicacion[parametro.nombre]
        if (explicacion) {
            const fueraDeRango = esValorFueraDeRango(valor, rangoMinimo, rangoMaximo)
            if (fueraDeRango) {
                const explicacionTexto = valor < rangoMinimo ? explicacion.bajo : explicacion.alto
                setSelectedParametro(parametro.nombre)
                setSelectedValor(valor)
                setSelectedExplicacion(`${explicacionTexto} (Rango de referencia: ${rangoMinimo} - ${rangoMaximo})`)
                setShowPopup(true)
            }
        }
    }

    return {
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
        setNewValores
    }
}

export default useResultadosAnalisis