import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analitycs = () => {
  const data = {
    labels: ['Eritrocitos', 'Hemoglobina', 'Hematocrito', 'MCV', 'MCH', 'MCHC', 'RDW'],
    datasets: [
      {
        label: 'Formula roja',
        data: [4.03, 11.8, 35.4, 87.8, 29.3, 33.3, 12.9],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        text: 'Hemoglobina',
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
                <Bar data={data} options={options} />
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