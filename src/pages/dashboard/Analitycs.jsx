import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);
const superior = 5.28
const inferior = 4.69
const Analitycs = () => {
  const data = {
    labels: ['Examen1', 'Examen2', 'Examen3', 'Examen4', 'Examen5', 'Examen6', 'Examen7'], // Etiquetas en el eje X
    datasets: [
      {
        label: 'Eritrocitos',
        data: [4.03, 4.01, 4.05, 5, 3.99, 3.3, 4.7], // Valores en el eje Y
        fill: false, // No rellenar el área debajo de la línea
        borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
        borderWidth: 2, // Ancho de la línea
        tension: 0.1, // Curvatura de la línea (0 para línea recta)
        // Si no quieres mostrar los puntos, simplemente omite cualquier propiedad relacionada con los puntos
      },
      {
        label: 'Rango superior',
        data: [superior, superior, superior, superior, superior, superior, superior], // Valores constantes que definen el límite superior
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.6)', // Color de la línea superior
        borderWidth: 1,
        borderDash: [5, 5], // Líneas discontinuas
      },
      // Línea inferior de rango
      {
        label: 'Rango inferior',
        data: [inferior, inferior, inferior, inferior, inferior, inferior, inferior], // Valores constantes que definen el límite inferior
        fill: false,
        borderColor: 'rgba(255, 159, 64, 0.6)', // Color de la línea inferior
        borderWidth: 1,
        borderDash: [5, 5], // Líneas discontinuas
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Eritrocitos',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Indicadores',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Valores',
        },
      },
    },
  };

  return (
    <>
      <div className='h-full p-8 border-t-2 bg-background dark:bg-background-dark'>
        <div className='flex flex-row h-full'>
          <div className='flex-col w-1/2 mx-5 border shadow-xl rounded-xl h-1/2'>
            <div className="flex items-center justify-center h-full rounded-xl">
              <div className="w-full h-full p-4 mx-auto">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div className='flex-col w-1/2 mx-5 border shadow-xl rounded-xl h-1/2'>
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
    </>
  )
}

export default Analitycs