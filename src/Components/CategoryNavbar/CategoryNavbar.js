import React from 'react'

export default function CategoryNavbar() {
  return (
    <div>
        <nav className='bg-cyan-300 flex justify-between  '>
          <h1 className='text-white font-bold text-4xl p-2'>Shopify</h1>
          <ul className='flex gap-5 justify-center items-center'>
            <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '>Men's Clothing</li>
            <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '>Jewelery</li>
            <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '>Electronics</li>
            <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl '>Women's Clothing</li>
            <li className='text-cyan-800 font-semibold text-lg hover:bg-cyan-500 hover:text-white p-4 rounded-xl  '>All</li>
          </ul>
          <button></button>
          
            
        </nav>
      
    </div>
  )
}

