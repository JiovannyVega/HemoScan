import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfilePage from './ProfilePage'
import Analitycs from './Analitycs'
import useGoogleAuth from '../../auth/useGoogleAuth'

const Dashboard = () => {
  const { logOut } = useGoogleAuth()
  const navigate = useNavigate()

  const [activeSection, setActiveSection] = useState('section1')
  const [preview, setPreview] = useState(null)
  const [fileName, setFileName] = useState('') // Estado para el nombre del archivo
  const fileInputRef = useRef(null)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    setFileName(file.name)
    if (file.type.startsWith('image/')) {
      // Mostrar vista previa si es una imagen
      const fileUrl = URL.createObjectURL(file)
      setPreview(<img src={fileUrl} alt='Vista previa del archivo' className='h-20 rounded-l' />)
    } else if (file.type === 'application/pdf') {
      // Mostrar un ícono o mensaje si es PDF
      setPreview(<p className='h-20 text-text dark:text-text-dark'>No vista previa</p>)
    } else {
      alert('Por favor, selecciona una imagen o un archivo PDF.')
      setPreview(null)
      setFileName('')
    }
  }

  const handleLogout = () => {
    logOut()
    navigate('/')
  }

  const handleLabelClick = () => {
    fileInputRef.current.click() // Forzar el clic en el input
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
                    <div className='file-upload'>
                      {preview && (
                        <div className='flex flex-row items-center w-full border rounded-md preview'>
                          <div className='w-1/5 border rounded-l-md preview'>
                            {preview}
                          </div>
                          <p className='ml-2'>{fileName}</p>
                        </div>
                      )}
                      <button onClick={handleLabelClick} className='w-full p-2 my-2 border rounded-lg shadow-md cursor-pointer'>
                        Add file
                      </button>
                      <input
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className='hidden input-field'
                        accept='image/*,application/pdf'
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
        return (<ProfilePage />)
      default:
        return null
    }
  }

  return (
    <div className='flex h-screen text-text dark:text-text-dark'>
      <nav className='w-1/5 border-t-2 border-r-2 min-h-max bg-background dark:bg-background-dark'>
        <h2 className='p-8 text-xl font-bold'>HemoScan</h2>
        <ul>
          <li className={activeSection === 'section1' ? 'bg-hover dark:bg-hover-dark' : ''}>
            <button onClick={() => setActiveSection('section1')} className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p className='mx-8'>Dashboard</p>
            </button>
          </li>
          <li className={activeSection === 'section2' ? 'bg-hover dark:bg-hover-dark' : ''}>
            <button onClick={() => setActiveSection('section2')} className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p className='mx-8'>Analitycs</p>
            </button>
          </li>
          <li className={activeSection === 'section3' ? 'bg-hover dark:bg-hover-dark' : ''}>
            <button onClick={() => setActiveSection('section3')} className='block w-full py-2 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p className='mx-8'>Profile</p>
            </button>
          </li>
          <li>
            <button onClick={handleLogout} className='block w-full py-2 mx-8 text-left hover:bg-hover dark:hover:bg-hover-dark'>
              <p>Logout</p>
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
