import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




export default function Navbar() {
  const items = useSelector(state => state.cart)
  return (

    <div>
    <nav className='bg-cyan-300 flex justify-between  '>
      <h1 className='text-white font-bold text-4xl p-2'>Shopify</h1>
      <ul className='flex gap-5 justify-center items-center'>
    <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '><Link to="/" >Home</Link></li>
   <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '><Link to="/cart" >cart</Link></li>
   <span className=' font-semibold text-l bg-cyan-500 text-white p-4 rounded-xl ' >items:{items.length}</span>
      </ul>
      <button></button>
      
        
    </nav>
  
</div>
  )
}
