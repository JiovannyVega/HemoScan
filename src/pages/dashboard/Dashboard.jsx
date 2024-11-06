import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useGoogleAuth from '../../auth/useGoogleAuth'
import Analitycs from './Analitycs'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('section1')
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(''); // Estado para el nombre del archivo
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    if (file.type.startsWith("image/")) {
      // Mostrar vista previa si es una imagen
      const fileUrl = URL.createObjectURL(file);
      setPreview(<img src={fileUrl} alt="Vista previa del archivo" className="h-20 rounded-l" />);
    } else if (file.type === "application/pdf") {
      // Mostrar un ícono o mensaje si es PDF
      setPreview(<p className="h-20 text-text dark:text-text-dark">No vista previa</p>);
    } else {
      alert("Por favor, selecciona una imagen o un archivo PDF.");
      setPreview(null);
      setFileName('');
    }
  };

  const handleLabelClick = () => {
    fileInputRef.current.click(); // Forzar el clic en el input
  };
  const { profile } = useGoogleAuth()

  const [user, setUser] = useState({
    name: 'Kim Dahyun',
    email: 'kimdahyun@gmail.com',
    picture: '/assets/Perfil.jpg',
    birthDate: '1998-05-28',
    gender: 'femenino',
    language: 'Espanol',
    notifications: true
  })

  useEffect(() => {
    if (profile) {
      setUser({
        name: profile.name,
        email: profile.email,
        picture: profile.picture || '/assets/Perfil.jpg',
        birthDate: profile.birthDate || '',
        gender: profile.gender || '',
        language: profile.language || '',
        notifications: profile.notifications || true
      })
    } else {
      setUser({
        name: 'Kim Dahyun',
        email: 'kimdahyun@gmail.com',
        picture: '/assets/Perfil.jpg',
        birthDate: '1998-05-28',
        gender: 'femenino',
        language: 'Espanol',
        notifications: true
      })
    }
  }, [profile])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'section1':
        return (
          <>
            <div className='h-full p-8 border-t-2 bg-background dark:bg-background-dark'>
              <div className='flex flex-col h-auto gap-4 md:gap-0 md:flex-row'>
                <div className='flex flex-col w-auto mx-5 border shadow-xl md:w-3/5 rounded-xl h-1/2'>
                  <h2 className='m-5 text-xl font-bold'>Recent analysis</h2>
                  <div className='p-5 overflow-x-auto'>
                    <table className='min-w-full text-center'>
                      <thead>
                        <tr>
                          <th className='px-4 py-2 border-b'>File name</th>
                          <th className='px-4 py-2 border-b'>Date order</th>
                          <th className='px-4 py-2 border-b'>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='px-4 py-2 border-b'>Hemo.pdf</td>
                          <td className='px-4 py-2 border-b'>01/10/2021</td>
                          <td className='px-4 py-2 bg-green-600 border-b'>Completed</td>
                        </tr>
                        <tr>
                          <td className='px-4 py-2 border-b'>Hemo.pdf</td>
                          <td className='px-4 py-2 border-b'>01/02/22</td>
                          <td className='px-4 py-2 bg-red-600 border-b'>Pending</td>
                        </tr>
                        <tr>
                          <td className='px-4 py-2 border-b'>Hemo.pdf</td>
                          <td className='px-4 py-2 border-b'>01/02/22</td>
                          <td className='px-4 py-2 bg-orange-600 border-b'>In process</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='flex-col w-auto mx-5 border shadow-xl md:w-2/5 rounded-xl h-1/2'>
                  <p className='mt-5 ml-5 text-xl font-bold'>Preview</p>
                  <div className='p-10'>
                    <div className="file-upload">
                      {preview && (
                        <div className="flex flex-row items-center w-full border rounded-md preview">
                          <div className="w-1/5 border rounded-l-md preview">
                            {preview}
                          </div>
                          <p className="ml-2">{fileName}</p>
                        </div>
                      )}
                      <button onClick={handleLabelClick} className="w-full p-2 my-2 border rounded-lg shadow-md cursor-pointer">
                        Add file
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className="hidden input-field"
                        accept="image/*,application/pdf"
                      />

                    </div>
                    <button className='w-full p-2 mb-2 text-lg text-white border rounded-lg bg-primary'>Upload File</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      case 'section2':
        return (<Analitycs />)
      case 'section3':
        return (
          <div className='h-screen p-8 overflow-scroll border-t-2 bg-background dark:bg-background-dark'>
            <div className='flex flex-col items-center w-full p-5 m-auto mb-0 rounded-lg shadow-xl md:w-1/2 bg-background dark:bg-background-dark'>
              <img
                src={user.picture}
                alt='Profile'
                className='mt-5 mb-5 bg-cover border-4 rounded-full w-60 h-60 border-hover dark:border-hover-dark'
              />
              <div className='w-4/5 mt-5 mb-5 text-center'>
                <p className='text-4xl'>{user.name}</p>
                <p className='text-xl'>{user.email}</p>
              </div>
              <div className='w-10/12 mt-5 mb-5 text-left'>
                <p className='text-3xl'>Información personal</p>
                <div className='mb-3'>
                  <label className='block mt-2 text-xl'>Nombre</label>
                  <input
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                    className='w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                  />
                </div>
                <div className='mb-3'>
                  <label className='block text-xl'>Correo electrónico</label>
                  <input
                    type='email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    className='w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                  />
                </div>
                <div className='mb-3'>
                  <label className='text-xl'>Fecha de nacimiento</label>
                  <input
                    type='date'
                    name='birthDate'
                    value={user.birthDate}
                    onChange={handleChange}
                    className='w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                  />
                </div>
                <div className='mb-3'>
                  <label className='text-xl'>Género</label>
                  <select
                    name='gender'
                    value={user.gender}
                    onChange={handleChange}
                    className='w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                  >
                    <option value='Femenino'>Femenino</option>
                    <option value='Masculino'>Masculino</option>
                    <option value='Otro'>Otro</option>
                  </select>
                </div>
              </div>
              <div className='w-10/12 mt-5 mb-5 text-left'>
                <p className='text-3xl'>Preferencias</p>
                <div className='mb-3'>
                  <label className='mt-2 text-xl'>Idioma</label>
                  <select
                    name='language'
                    value={user.language}
                    onChange={handleChange}
                    className='w-full p-3 mt-1 border-2 rounded border-hover dark:border-hover-dark bg-background dark:bg-background-dark'
                  >
                    <option value='Espanol'>Español</option>
                    <option value='Ingles'>Ingles</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label className='text-xl'>Notificaciones</label>
                  <input
                    type='checkbox'
                    name='notifications'
                    className='w-full p-3 mt-1 text-text'
                    checked={user.notifications}
                    onChange={(e) =>
                      setUser({ ...user, notifications: e.target.checked })}
                  />
                </div>
              </div>
              <div className='w-10/12 mt-5 mb-5 text-left'>
                <p className='flex text-3xl'>Historial de actividades</p>
                <ul>
                  <li className='flex items-center justify-between'>
                    <span>Examen 1</span>
                    <button className='p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary'>
                      Ver detalles
                    </button>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span>Examen 2</span>
                    <button className='p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary'>
                      Ver detalles
                    </button>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span>Examen 3</span>
                    <button className='p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary '>
                      Ver detalles
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => console.log('Cerrar sesion')}
                  className='p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary'
                >
                  Cerrar sesion
                </button>
                <button
                  onClick={() => console.log('Eliminar cuenta')}
                  className='p-4 m-2 text-white rounded-md cursor-pointer bg-primary hover:bg-secondary'
                >
                  Eliminar cuenta
                </button>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className='flex text-text dark:text-text-dark'>
      <nav className='w-1/5 h-screen border-t-2 border-r-2 bg-background dark:bg-background-dark'>
        <h2 className='p-8 text-xl font-bold'>HemoScan</h2>
        <ul>
          <li className='has-[:checked]:bg-red-600'>
            <a href="#" className='has-[active]:bg-red-600'>Hola</a>
            <button onClick={() => setActiveSection('section1')} className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p className='mx-8'>Dashboard</p>
            </button>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </li>
          <li>
            <button onClick={() => setActiveSection('section2')} className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p className='mx-8'>Analitycs</p>
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection('section3')} className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p className='mx-8'>Profile</p>
            </button>
          </li>
          <li>
            <button className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <Link to='/login' className='mx-8'>Logout</Link>
            </button>
          </li>
        </ul>
      </nav>

      <div className='flex-1'>
        {renderSection()}
      </div>
    </div>
  )
}

export default Dashboard
