import React from 'react'

function Navbar() {
  return (
    <div className='w-screen h-[9vh] bg-[#1D1D1D]'>
         <nav className='flex flex-row items-center'>
        <img src="/images/logo.png" alt="" className='h-16 w-16' />
        <div className='text-4xl'><span className='text-red-800 font-bold'>Rapid</span><span className='text-white font-bold'>Edit</span></div>
    </nav>
    </div>
   
  )
}

export default Navbar