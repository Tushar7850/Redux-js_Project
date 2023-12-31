import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove } from '../Redux/CartSlice'


export default function Cart() {
  const dispatch = useDispatch();

  const cartitems = useSelector(state => state.cart)

  const handleremove=(id)=>{
    dispatch(remove(id))
  }


  return (
    <div className='px-3 bg-zinc-200 h-screen'>
        <h1>Cart</h1>

        {
          cartitems.map((item)=>{
            return (
             <div className='flex gap-4 bg-white mt-2 items-center h-28 px-5'>
               <img src={item.image} className='h-20 w-20 ' alt="" />
              <div className='md:flex gap-5 items-center'>

              <h5 className='text-black font-bold text-sm'>{item.title}</h5>

              <h5 className='text-black font-bold  text-sm mt-2'>Rs.{item.price}</h5>
              </div>
              <button className='bg-cyan-500 text-white p-2 rounded-xl' onClick={()=>handleremove(item.id)}>Remove</button>
             </div>
            )
          })
        }
      
    </div>
  )
}
