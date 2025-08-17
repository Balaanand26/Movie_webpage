import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <nav className='bg-gray-900 p-4 text-white flex justify-between fixed top-0 w-full z-10'>
        <Link to="/" className='text-xl font-bold'>Movie App</Link>
        <Link to="/Watchlist" className='text-xl'>Watchlist(0)</Link>
    </nav>
  )
}

export default Navbar