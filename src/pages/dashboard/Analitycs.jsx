import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

const Analitycs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const datasets = [
    // Formula roja chart
    {
      title: 'Eritrocitos',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'Eritrocitos',
          data: [4.03, 4.01, 4.05, 5, 3.99, 3.3, 4.7],
          borderColor: 'blue',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [5.28, 5.28, 5.28, 5.28, 5.28, 5.28, 5.28],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [3.69, 3.69, 3.69, 3.69, 3.69, 3.69, 3.69],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
    {
      title: 'Hemoglobina',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'Hemoglobina',
          data: [12, 11.5, 13, 12.8, 13.5, 11.9, 12.3],
          borderColor: 'red',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [15, 15, 15, 15, 15, 15, 15],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [12, 12, 12, 12, 12, 12, 12],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
    // Formula blanca chart
    {
      title: 'Leucocitos',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'Leucocitos',
          data: [4.86, 5, 6.5, 7, 5, 5.5, 5.9],
          borderColor: 'blue',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [11.0, 11.0, 11.0, 11.0, 11.0, 11.0, 11.0],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
    {
      title: 'Linfocitos',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'Linfocitos',
          data: [48.5, 46, 43, 12.8, 25, 35, 33],
          borderColor: 'red',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [45, 45, 45, 45, 45, 45, 45],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [25, 25, 25, 25, 25, 25, 25],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
    // Valores absolutos chart
    {
      title: 'Neutrofilos',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'Neutrofilos',
          data: [2230.7, 2550, 3500, 4000, 2800, 5500, 6500],
          borderColor: 'blue',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [7500, 7500, 7500, 7500, 7500, 7500, 7500],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [2000, 2000, 2000, 2000, 2000, 2000, 2000],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
    {
      title: 'Monocitos',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'Monocitos',
          data: [238.1, 240, 250, 230, 260, 300, 350],
          borderColor: 'red',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [800, 800, 800, 800, 800, 800, 800],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [20, 20, 20, 20, 20, 20, 20],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
    // Formula trombotica chart
    {
      title: 'Plaquetas',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'Plaquetas',
          data: [343, 320, 380, 360, 420, 415, 411],
          borderColor: 'blue',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [429, 429, 429, 429, 429, 429, 429],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [158, 158, 158, 158, 158, 158, 158],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
    {
      title: 'Volumen plaquetario medio',
      labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'],
      data: [
        {
          label: 'VPM',
          data: [8.8, 11.5, 10.9, 11.8, 9.3, 11.9, 9.1],
          borderColor: 'red',
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: 'Rango superior',
          data: [12.9, 12.9, 12.9, 12.9, 12.9, 12.9, 12.9],
          borderColor: 'rgba(255, 99, 132, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
        {
          label: 'Rango inferior',
          data: [9.1, 9.1, 9.1, 9.1, 9.1, 9.1, 9.1],
          borderColor: 'rgba(255, 159, 64, 0.6)',
          borderWidth: 1,
          borderDash: [5, 5],
        },
      ],
    },
  ]

  const generateOptions = (title) => ({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#ffffff' : '#000000',
        },
      },
      title: {
        display: true,
        text: title,
        color: isDarkMode ? '#ffffff' : '#000000',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Indicadores',
          color: isDarkMode ? '#ffffff' : '#000000',
        },
        ticks: {
          color: isDarkMode ? '#ffffff' : '#000000',
        },
        grid: {
          color: isDarkMode ? '#4B5563' : '#E5E7EB',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Valores',
          color: isDarkMode ? '#ffffff' : '#000000',
        },
        ticks: {
          color: isDarkMode ? '#ffffff' : '#000000',
        },
        grid: {
          color: isDarkMode ? '#4B5563' : '#E5E7EB',
        },
      },
    },
  })

  const [activeSection, setActiveSection] = useState('section1')

  const renderSection = () => {
    switch (activeSection) {
      case 'section1':
        return (
          <div className='h-screen p-8 space-y-8 bg-background dark:bg-background-dark'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[0].labels,
                    datasets: datasets[0].data,
                  }}
                  options={generateOptions(datasets[0].title)}
                />
              </div>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[1].labels,
                    datasets: datasets[1].data,
                  }}
                  options={generateOptions(datasets[1].title)}
                />
              </div>
              <div className='flex-col mt-8 border shadow-xl rounded-xl'>
                <h2 className='m-5 text-xl font-bold'>Actual levels</h2>
                <div className='p-5 overflow-x-auto'>
                  <table className='min-w-full text-center'>
                    <tbody>
                      <tr>
                        <td className='px-4 py-2 border-y'>Linfocitos</td>
                        <td className='px-4 py-2 bg-green-600 border-b'>Normal</td>
                      </tr>
                      <tr>
                        <td className='px-4 py-2 border-b'>Hemocrocitos</td>
                        <td className='px-4 py-2 bg-red-600 border-b'>High</td>
                      </tr>
                      <tr>
                        <td className='px-4 py-2 border-b'>Hemoglobina</td>
                        <td className='px-4 py-2 bg-orange-600 border-b'>Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      case 'section2':
        return (
          <div className='h-screen p-8 space-y-8 bg-background dark:bg-background-dark'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[2].labels,
                    datasets: datasets[2].data,
                  }}
                  options={generateOptions(datasets[2].title)}
                />
              </div>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[3].labels,
                    datasets: datasets[3].data,
                  }}
                  options={generateOptions(datasets[3].title)}
                />
              </div>
            </div>
          </div>
        )
      case 'section3':
        return (
          <div className='h-screen p-8 space-y-8 bg-background dark:bg-background-dark'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[4].labels,
                    datasets: datasets[4].data,
                  }}
                  options={generateOptions(datasets[4].title)}
                />
              </div>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[5].labels,
                    datasets: datasets[5].data,
                  }}
                  options={generateOptions(datasets[5].title)}
                />
              </div>
            </div>
          </div>
        )
      case 'section4':
        return (
          <div className='h-screen p-8 space-y-8 bg-background dark:bg-background-dark'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[6].labels,
                    datasets: datasets[6].data,
                  }}
                  options={generateOptions(datasets[6].title)}
                />
              </div>
              <div className='p-8 border shadow-xl rounded-xl'>
                <Line
                  data={{
                    labels: datasets[7].labels,
                    datasets: datasets[7].data,
                  }}
                  options={generateOptions(datasets[7].title)}
                />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className='h-screen border-t-2 bg-background dark:bg-background-dark'>
      <div className='flex flex-col '>
        <nav className='flex items-center justify-between border-b-2 bg-background dark:bg-background-dark'>
          <h2 className='p-3 ml-4 text-xl font-bold'>Analitycs</h2>
          <ul className='flex'>
            <li className={activeSection === 'section1' ? 'bg-hover dark:bg-hover-dark h-full' : ''}>
              <button onClick={() => setActiveSection('section1')} className='hover:bg-hover dark:hover:bg-hover-dark'>
                <p className='mx-8'>Formula roja</p>
              </button>
            </li>
            <li className={activeSection === 'section2' ? 'bg-hover dark:bg-hover-dark' : ''}>
              <button onClick={() => setActiveSection('section2')} className='hover:bg-hover dark:hover:bg-hover-dark'>
                <p className='mx-8'>Formula blanca</p>
              </button>
            </li>
            <li className={activeSection === 'section3' ? 'bg-hover dark:bg-hover-dark' : ''}>
              <button onClick={() => setActiveSection('section3')} className='hover:bg-hover dark:hover:bg-hover-dark'>
                <p className='mx-8'>Valores absolutos</p>
              </button>
            </li>
            <li className={activeSection === 'section4' ? 'bg-hover dark:bg-hover-dark' : ''}>
              <button onClick={() => setActiveSection('section4')} className='hover:bg-hover dark:hover:bg-hover-dark'>
                <p className='mx-8'>Formula trombocitica</p>
              </button>
            </li>
          </ul>
        </nav>
        <div className='flex-1'>
          {renderSection()}
        </div>
      </div>
    </div>
  )
}

export default Analitycs