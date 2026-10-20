import React from 'react'

const DasboardLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div>
      <div className='text-2xl font-bold bg-teal-600  p-3 text-center'>
        <h3>Dashboard</h3>
      </div>
      {children}
    </div>
  )
}

export default DasboardLayout
