import React from 'react'
import { MdDelete } from "react-icons/md";
import { useCart } from '../Pages/ContextReducer'
import { useDispatchCart } from '../Pages/ContextReducer';

const CartItem = () => {

  let CartItems = useCart()
  let dispatch = useDispatchCart()


  console.log(CartItems);
  return (
    <div>
      {
        CartItems.map((item, index) => {
          return (
            <div className='border-b-2 border-gray-700   max-h-56 mx-5 py-4'>
              <div className='flex flex-col  w-[500px] gap-4'>
                <h1 className='text-md font-semibold  w-96'>{item.name}</h1>
                <p className='w-full text-gray-700 font-normal text-xs text-left'>{item.description}</p>
                <div className='flex justify-between gap-12 items-center w-full '>
                  <p className='text-green-600 font-semibold'>${item.price}</p>
                  <div className='rounded-full h-8 w-8 bg-red-200 flex justify-center items-center hover:cursor-pointer'>
                    <MdDelete onClick={()=>{dispatch({type:"REMOVE", index})}}   className='text-red-700' />
                  </div>
                </div>
              </div>

            </div>
          )


        })
      }



    </div>
  )
}

export default CartItem