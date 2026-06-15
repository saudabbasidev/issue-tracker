import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className='fixed w-[80vw] md:top-10 md:right-[10vw] max-md:w-screen p-5 md:rounded-full bg-white flex justify-between'>
    <div>Logo</div>

    <div className='space-x-2 font-semibold'>
        <a href="/dashboard" className='p-2 bg-gray-200 rounded-lg'>dashboard</a>
        <a href="/signup" className='bg-blue-950 p-2 rounded-full px-4 text-white'>Signup</a>
    </div>
   </nav>
   
   </>
  )
}

export default Navbar