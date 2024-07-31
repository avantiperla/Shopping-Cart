import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'

const Cart = () => {

  // const {cart} = useSelector((state) => state);
  // const [totalAmount, setTotalAmount] = useState(0)

  // useEffect(() => {
  //   setTotalAmount(cart.reduce((acc, curr) => acc + curr.prices, 0))
  // },[cart])

  return (
    <div>
      {/* {
        cart.length > 0 ? 
        ( */}
          <div className='flex flex-col md:flex-row max-w-6xl mx-auto py-20 gap-8 '>
            <div className=' w-8/12 flex flex-col pt-10'>
              {/* {
                cart.map((item, index) => (
                  <CartItem key={item.id} item = {item} itemIndex = {index}/>
                ))
              } */}
              <CartItem />
            </div>


            <div className=' flex flex-col justify-between gap-10 max-h-[76vh] w-1/3 mt-10 pt-10'>

              <div className='flex flex-col'>
                <div className='text-md uppercase font-semibold text-green-700'>Your Cart</div>
                <div className='text-3xl uppercase font-bold text-green-700 leading-7'>SUMMARY</div>
                <p className='text-[14px] pt-4 font-semibold'><span>Total Items: 990</span></p>
              </div>

              <div>
                <p className='text-[14px] font-medium mb-3'>Total Amount: <span className='text-[14px] pt-4 font-semibold'>990</span></p>
                <button className=' text-green-700 font-medium w-full py-3 bg-white border-2 border-green-700 text-sm hover:bg-green-700 hover:text-white transition-all duration-500 ease-in tracking-widest'>ORDER NOW</button>
              </div>
              
            </div>
          </div>
        {/* ) :

        (
          <div className='flex items-center justify-center h-screen w-full  flex-col '>
            <div className='w-[13vw]  flex flex-col gap-10'>
              <h1 className='text-center text-xl font-semibold'>Cart Empty</h1>
              <Link to="/">
                <button className='bg-green-700 text-white font-bold w-full py-3 rounded-lg' >Shop Now</button>
              </Link>
            </div>
          </div>
        ) */}
      {/* } */}
    </div>
  )
}

export default Cart