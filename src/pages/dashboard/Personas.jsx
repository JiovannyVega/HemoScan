import { useEffect, useState } from 'react'
import { getPersonas } from '../../api/personas'

const Personas = () => {
    const [personas, setPersonas] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPersonas = async () => {
            try {
                const data = await getPersonas()
                setPersonas(data)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchPersonas()
    }, [])

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

    return (
        <>
            <div className='flex flex-col items-center h-full m-0 border-t-2 md:py-4 text-text dark:text-text-dark bg-background dark:bg-background-dark'>
                <div className='flex flex-col items-center w-full p-5 mb-0 overflow-scroll border rounded-lg shadow-xl no-scrollbar md:w-2/3 bg-background dark:bg-background-dark'>
                    <h2 className='text-2xl font-bold'>Personas</h2>
                    {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
                    <table className='w-full mt-4 text-center border-collapse table-auto'>
                        <thead>
                            <tr className='bg-gray-200 dark:bg-gray-700'>
                                <th className='px-4 py-2 border'>Nombre</th>
                                <th className='px-4 py-2 border'>Apellido</th>
                                <th className='px-4 py-2 border'>Fecha de Nacimiento</th>
                                <th className='px-4 py-2 border'>Edad</th>
                                <th className='px-4 py-2 border'>Sexo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personas.map(persona => (
                                <tr key={persona.id} className='odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900'>
                                    <td className='px-4 py-2 border'>{persona.nombre}</td>
                                    <td className='px-4 py-2 border'>{persona.apellido}</td>
                                    <td className='px-4 py-2 border'>{new Date(persona.fecha_nacimiento).toLocaleDateString()}</td>
                                    <td className='px-4 py-2 border'>{calcularEdad(persona.fecha_nacimiento)}</td>
                                    <td className='px-4 py-2 border'>{persona.sexo === 'M' ? 'Hombre' : 'Mujer'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Personas
