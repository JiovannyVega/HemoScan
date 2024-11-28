import { useState, useEffect } from 'react'
import axios from 'axios'

const ProfilePage = () => {

    const [isDisabled, setIsDisabled] = useState(true);

    const handleEditClick = () => {
        setIsDisabled(false);
    };

    const handleInputChange = (event) => {
        setUser({ ...user, name: event.target.value });
    };

    const [user, setUser] = useState({
        name: 'Kim Dahyun',
        email: 'kimdahyun@gmail.com',
        picture: '/assets/Perfil.jpg',
        birthDate: '1998-05-28',
        sexo: 'femenino',
        language: 'Espanol',
        notifications: true
    })

    const updateUser = async () => {
        try {
            alert(user.sexo)
            const response = await axios.put('http://localhost:3000/api/users', {
                email: user.email,
                nombre: user.name,
                picture: user.picture,
                fecha_nacimiento: user.birthDate,
                sexo: user.sexo
            })
            console.log('Usuario actualizado:', response.data)
        } catch (error) {
            console.error('Error al actualizar el usuario:', error)
        }
    }

    useEffect(() => {
        const savedUser = localStorage.getItem('user')
        console.log('Usuario guardado:', savedUser)
        if (savedUser) {
            const userData = JSON.parse(savedUser)
            console.log('Usuario guardado:', userData)
            setUser({
                name: userData.nombre || '',
                email: userData.email || '',
                picture: userData.picture || '/assets/Perfil.jpg',
                birthDate: userData.birthDate || '',
                sexo: userData.sexo || '',
                language: '',
                notifications: true
            })
        } else {
            setUser({
                name: 'Kim Dahyun',
                email: 'kimdahyun@gmail.com',
                picture: '/assets/Perfil.jpg',
                birthDate: '1998-05-28',
                sexo: 'femenino',
                language: 'Espanol',
                notifications: true
            })
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }
    console.log(user.id)

    return (
        <>
            <div className='flex flex-col items-center h-screen m-0 border-t-2 md:py-4 text-text dark:text-text-dark bg-background dark:bg-background-dark'>
                <div className='flex flex-col items-center w-full p-5 mb-0 overflow-scroll border rounded-lg shadow-xl no-scrollbar md:w-2/3 bg-background dark:bg-background-dark'>

                    <img
                        src={user.picture}
                        alt='Profile'
                        className='mt-5 mb-5 bg-cover border-4 rounded-full w-60 h-60 border-hover dark:border-hover-dark'
                    />
                    <div className='w-10/12 mt-5 mb-5 text-left'>
                        <p className='text-3xl'>Información personal</p>
                        <div className='mb-3 border-t-2 border-b-2'>
                            <label className='block mt-2 text-xl'>Nombre</label>
                            {isDisabled ? (
                                <label className='block p-5 mt-2 text-md'>{user.name}</label>
                            ) : (
                                <input
                                    type='text'
                                    name='name'
                                    value={user.name}
                                    onChange={handleInputChange}
                                    disabled={isDisabled}
                                    className='w-full p-3 mt-1 mb-5 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                                />
                            )}
                        </div>
                        <div className='mb-3 border-b-2'>
                            <label className='block text-xl'>Correo electrónico</label>
                            {isDisabled ? (
                                <label className='block p-5 mt-2 text-md'>{user.email}</label>
                            ) : (
                                <input
                                    type='email'
                                    name='email'
                                    value={user.email}
                                    onChange={handleChange}
                                    className='w-full p-3 mt-1 mb-5 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                                />
                            )}
                        </div>
                        <div className='mb-3 border-b-2'>
                            <label className='text-xl'>Fecha de nacimiento</label>
                            {isDisabled ? (
                                <label className='block p-5 mt-2 text-md'>{user.birthDate}</label>
                            ) : (
                                <input
                                    type='date'
                                    name='birthDate'
                                    value={user.birthDate}
                                    onChange={handleChange}
                                    className='w-full p-3 mt-1 mb-5 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                                />
                            )}
                        </div>
                        <div className='mb-3 border-b-2'>
                            <label className='text-xl'>Género</label>
                            {isDisabled ? (
                                <label className='block p-5 mt-2 text-md'>{user.sexo}</label>
                            ) : (
                                <select
                                    name='sexo'
                                    value={user.sexo}
                                    onChange={handleChange}
                                    className='w-full p-3 mt-1 mb-5 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                                >
                                    <option value='Femenino'>Femenino</option>
                                    <option value='Masculino'>Masculino</option>
                                    <option value='Otro'>Otro</option>
                                </select>
                            )}
                        </div>
                    </div>
                    <div className='w-10/12 mt-5 mb-5 text-left'>
                        <p className='text-3xl'>Preferencias</p>
                        <div className='mb-3 border-t-2 border-b-2'>
                            <label className='mt-2 text-xl'>Idioma</label>
                            {isDisabled ? (
                                <label className='block p-5 mt-2 text-md'>{user.language}</label>
                            ) : (
                                <select
                                    name='language'
                                    value={user.language}
                                    onChange={handleChange}
                                    className='w-full p-3 mt-1 mb-5 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'>
                                    <option value='Espanol'>Español</option>
                                    <option value='Ingles'>Ingles</option>
                                </select>
                            )}
                        </div>
                    </div>
                    <div className='flex row-auto Flex'>
                        <button onClick={handleEditClick} className='p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary'>Editar</button>
                        <button onClick={updateUser} className='p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary'>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage
