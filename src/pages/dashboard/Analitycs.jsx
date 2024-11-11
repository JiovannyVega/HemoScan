const Analitycs = () => {
  return (
    <>
      <div className='h-full p-8 border-t-2 bg-background dark:bg-background-dark'>
        <div className='flex flex-row h-full'>
          <div className='flex-col w-1/2 mx-5 border shadow-xl rounded-xl h-1/2' />
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