import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getPersonas, createPersona } from '../../api/personas'

const Personas = () => {
    const [personas, setPersonas] = useState([])
    const [error, setError] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [newPersona, setNewPersona] = useState({
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        sexo: 'M'
    })

    const navigate = useNavigate()

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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewPersona({ ...newPersona, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createPersona(newPersona)
            setShowForm(false)
            const data = await getPersonas()
            setPersonas(data)
        } catch (err) {
            setError(err.message)
        }
    }

    const handlePersonaClick = (personaId) => {
        navigate(`/dashboard/personas/${personaId}/analisis`)
    }

    return (
        <>
            <div className='flex flex-col items-center h-full m-0 border-t-2 md:py-4 text-text dark:text-text-dark bg-background dark:bg-background-dark'>
                <div className='flex flex-col items-center w-full p-5 mb-0 overflow-scroll border rounded-lg shadow-xl no-scrollbar md:w-2/3 bg-background dark:bg-background-dark'>
                    <nav className='w-full mb-4'>
                        <Link to='/dashboard' className='text-blue-500 hover:underline'>Dashboard</Link> &gt;
                        <Link to='/dashboard/personas' className='text-blue-500 hover:underline'> Personas</Link>
                    </nav>
                    <h2 className='text-2xl font-bold'>Personas</h2>
                    {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
                    {personas.length === 0 ? (
                        <p className='mt-4 text-center'>No hay personas disponibles.</p>
                    ) : (
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
                                    <tr key={persona.id} className='cursor-pointer odd:bg-white even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-900' onClick={() => handlePersonaClick(persona.id)}>
                                        <td className='px-4 py-2 border'>{persona.nombre}</td>
                                        <td className='px-4 py-2 border'>{persona.apellido}</td>
                                        <td className='px-4 py-2 border'>{new Date(persona.fecha_nacimiento).toLocaleDateString()}</td>
                                        <td className='px-4 py-2 border'>{calcularEdad(persona.fecha_nacimiento)}</td>
                                        <td className='px-4 py-2 border'>{persona.sexo === 'M' ? 'Hombre' : 'Mujer'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <button onClick={() => setShowForm(true)} className='px-4 py-2 mt-4 text-white bg-blue-500 rounded'>Agregar Persona</button>
                    {showForm && (
                        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                            <div className='p-4 bg-white rounded'>
                                <h2 className='mb-4 text-xl'>Agregar Persona</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type='text' name='nombre' placeholder='Nombre' value={newPersona.nombre} onChange={handleInputChange} className='w-full p-2 mb-2 border rounded' required />
                                    <input type='text' name='apellido' placeholder='Apellido' value={newPersona.apellido} onChange={handleInputChange} className='w-full p-2 mb-2 border rounded' required />
                                    <input type='date' name='fecha_nacimiento' value={newPersona.fecha_nacimiento} onChange={handleInputChange} className='w-full p-2 mb-2 border rounded' required />
                                    <select name='sexo' value={newPersona.sexo} onChange={handleInputChange} className='w-full p-2 mb-2 border rounded'>
                                        <option value='M'>Hombre</option>
                                        <option value='F'>Mujer</option>
                                    </select>
                                    <button type='submit' className='px-4 py-2 text-white bg-green-500 rounded'>Guardar</button>
                                    <button type='button' onClick={() => setShowForm(false)} className='px-4 py-2 ml-2 text-white bg-red-500 rounded'>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default Personas
