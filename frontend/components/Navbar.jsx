import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='w-full flex gap-4 p-4 bg-gray-200'>
      <Link to="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Home</Link>
      <Link to="/create-blog" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>New</Link>
    </div>
  )
}

export default Navbar
