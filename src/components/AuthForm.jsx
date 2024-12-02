import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import PropTypes from 'prop-types'

const AuthForm = ({ title, formData, handleChange, handleSubmit, googleLoginHandler, isSignup }) => {
    return (
        <div className='flex flex-row h-auto bg-gradient-to-b from-primary to-secondary'>
            <div className='items-center hidden w-1/2 sm:flex'>
                <img src='/assets/Intro.png' alt='Intro' className='h-250' />
            </div>
            <div className='flex flex-col items-center w-full h-full ml-auto sm:w-1/2 bg-background dark:bg-background-dark text-text dark:text-text-dark'>
                <div className='flex flex-row w-11/12 text-center border-b'>
                    <div className='w-1/2 mt-5'>
                        <Link to='/login' className={`no-underline p-7 ${!isSignup ? 'font-bold' : ''}`}>Iniciar sesión</Link>
                    </div>
                    <div className='w-1/2 mt-5'>
                        <Link to='/signup' className={`ml-auto no-underline p-7 ${isSignup ? 'font-bold' : ''}`}>Registrate</Link>
                    </div>
                </div>
                <p className='mt-4 text-2xl'>{title}</p>
                <img src='/assets/perfil-icono.png' className='self-center w-20 h-20 mt-5 mb-4' alt='perfil' />
                <p className=''>
                    {isSignup ? 'Regístrate ahora y obtén acceso completo a nuestra aplicación.' : 'Inicia sesión para continuar.'}
                </p>
                <form className='flex flex-col w-11/12 h-max p-7' onSubmit={handleSubmit}>
                    {isSignup && (
                        <label>
                            <input required placeholder='Nombre de usuario' type='text' name='nombre_usuario' value={formData.nombre_usuario} onChange={handleChange} className='w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark' />
                        </label>
                    )}
                    <label>
                        <input required placeholder='Correo' type='email' name='email' value={formData.email} onChange={handleChange} className='w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark' />
                    </label>
                    <label>
                        <input
                            required
                            placeholder='Contrasena'
                            type='password'
                            name='contrasena'
                            value={formData.contrasena}
                            onChange={handleChange}
                            className='w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark'
                        />
                    </label>
                    {isSignup && (
                        <label>
                            <input
                                required
                                placeholder='Confirma tu contrasena'
                                type='password'
                                name='confirmaContrasena'
                                value={formData.confirmaContrasena}
                                onChange={handleChange}
                                className='w-full p-3 mb-4 border rounded-md bg-background dark:bg-background-dark'
                            />
                        </label>
                    )}
                    <button className='p-3 mb-0 text-white border-2 rounded-md bg-primary' type='submit'>Ingresar</button>
                </form>
                <p className='mb-0'>O</p>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        googleLoginHandler(credentialResponse.credential)
                    }}
                    onError={() => {
                        console.log('Login Failed')
                    }}
                />
            </div>
        </div>
    )
}

AuthForm.propTypes = {
    title: PropTypes.string.isRequired,
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    googleLoginHandler: PropTypes.func.isRequired,
    isSignup: PropTypes.bool.isRequired
}

export default AuthForm