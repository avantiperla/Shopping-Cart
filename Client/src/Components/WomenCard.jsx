import React from 'react'
import { useNavigate } from 'react-router-dom';

const WomenCard = ({product}) => {
    console.log(product);
    const navigate = useNavigate()
  return (
    <div className=' bg-red-200'>
      
      <div className='h-[60vh] relative'>
        <img src= {product.image} className='h-full w-full' onClick={() => {navigate("/productDetails",{state:product})}}/>

        <p className='text-black font-normal  absolute left-5 bottom-6 text-sm'>{product.name}</p>
        
        <p className='text-black font-normal  absolute right-5 bottom-6 text-sm'>${product.price}</p>
   
      </div>

     

    </div>
  )
}

export default WomenCard