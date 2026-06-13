import React from 'react'

const Navbar = () => {
  return (
<nav className='flex justify-around px-5'>
<a href="/">Logo</a>    
<ul className='flex gap-2 '>
        <li><a href="/">dashboard</a></li>
        <li><a href="/issue">issues</a></li>
    </ul>
</nav>  )
}

export default Navbar