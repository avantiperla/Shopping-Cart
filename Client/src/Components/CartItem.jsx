import React from 'react'
import { MdDelete } from "react-icons/md";
// import { useDispatch } from "react-redux"
// import {remove} from "../redux/Slices/CartSlice"
// import toast from 'react-hot-toast'

const CartItem = () => {

  // const dispatch = useDispatch()

  // const removeFromCart = () => {
  //   dispatch(remove(item.id));
  //   toast.success("Item Removed")
  // }
  return (
    <div>
      
      <div className='border-b-2 border-gray-700 flex gap-10 justify-center items-center max-h-56 mx-5 py-6'>

        <div className='h-1/12 w-2/12 bg-black flex justify-center items-center'>
          <img src='../Clothing1.jpg' className='h-full w-full'/>
        </div>

        <div className='flex flex-col  w-[500px] gap-4'>
          <h1 className='text-md font-semibold  w-96'>Lorem Ipsum</h1>
          <p className='w-full text-gray-700 font-normal text-[10px] text-left'>Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum</p>
          <div className='flex justify-between gap-12 items-center w-full '>
            <p className='text-green-600 font-semibold'>990</p>
            <div className='rounded-full h-8 w-8 bg-red-200 flex justify-center items-center hover:cursor-pointer'>
              <MdDelete className='text-red-700'/>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CartItem