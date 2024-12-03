import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthProvider'

const ProfilePage = () => {
    const { getUser } = useAuth()

    const [user, setUser] = useState({
        nombre_usuario: '',
        email: '',
        picture: null
    })

    useEffect(() => {
        const savedUser = getUser()
        if (savedUser) {
            setUser({
                nombre_usuario: savedUser.nombre_usuario || '',
                email: savedUser.email || '',
                picture: savedUser.picture || null
            })
        }
    }, [getUser])

    return (
        <>
            <div className='flex flex-col items-center h-screen m-0 border-t-2 md:py-4 text-text dark:text-text-dark bg-background dark:bg-background-dark'>
                <div className='flex flex-col items-center w-full p-5 mb-0 overflow-scroll border rounded-lg shadow-xl no-scrollbar md:w-2/3 bg-background dark:bg-background-dark'>
                    <img
                        src={user.picture || '/assets/Perfil.jpg'}
                        alt='Profile'
                        className='mt-5 mb-5 bg-cover border-4 rounded-full w-60 h-60 border-hover dark:border-hover-dark'
                    />
                    <div className='w-10/12 mt-5 mb-5 text-left'>
                        <p className='text-3xl'>Información personal</p>
                        <div className='mb-3 border-t-2 border-b-2'>
                            <label className='block mt-2 text-xl'>Nombre de usuario</label>
                            <label className='block p-5 mt-2 text-md'>{user.nombre_usuario}</label>
                        </div>
                        <div className='mb-3 border-b-2'>
                            <label className='block text-xl'>Correo electrónico</label>
                            <label className='block p-5 mt-2 text-md'>{user.email}</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage
