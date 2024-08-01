
import { Link } from 'react-router-dom'
import CartItem from '../Components/CartItem'
import {useCart} from '../Pages/ContextReducer'
import axios from 'axios'

const Cart = () => {

  let cartItemsDetails = useCart()
  let totalPriceCount=0
  let totalPrice = ()=>{
    for(let i =0;i<cartItemsDetails.length;i++){
      totalPriceCount= totalPriceCount + cartItemsDetails[i].price;
    }
    return totalPriceCount
  }

  const handleSubmit = async()=>{
    await axios.post("http://localhost:5000/api/order",{
      cartItemsDetails,
      totalPriceCount
    }).then( res=>{console.log("CALLED")})
  }

  return (
    <div>
      {
        cartItemsDetails.length > 0 ? 
        (
          <div className='flex flex-col md:flex-row max-w-6xl mx-auto py-20 gap-8 '>
            <div className=' w-7/12 flex flex-col pt-10'>
              <CartItem />
            </div>


            <div className=' flex flex-col justify-between gap-10 max-h-[76vh] w-1/3 mt-10 pt-10'>

              <div className='flex flex-col'>
                <div className='text-md uppercase font-semibold text-green-700'>Your Cart</div>
                <div className='text-3xl uppercase font-bold text-green-700 leading-7'>SUMMARY</div>
                <p className='text-[14px] pt-4 font-semibold'><span>Total Items: {cartItemsDetails.length}</span></p>
              </div>

              <div>
                <p className='text-[14px] font-medium mb-3'>Total Amount: <span className='text-[14px] pt-4 font-semibold'>{totalPrice()}</span></p>
                <Link to='/orderSuccessful'><button onClick={handleSubmit} className=' text-green-700 font-medium w-full py-3 bg-white border-2 border-green-700 text-sm hover:bg-green-700 hover:text-white transition-all duration-500 ease-in tracking-widest'>ORDER NOW</button></Link>
              </div>
              
            </div>
          </div>
        ) :

        (
          <div className='flex items-center justify-center h-screen w-full  flex-col '>
            <div className='w-[13vw]  flex flex-col gap-10'>
              <h1 className='text-center text-xl font-semibold'>Cart Empty</h1>
              <Link to="/">
                <button className='bg-green-700 text-white font-bold w-full py-3 rounded-lg'>Shop Now</button>
              </Link>
            </div>
          </div>
        ) }
      
    </div>
  )
}

export default Cart