import { useEffect, useState } from 'react'
import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const NewArrivals = () => {
    const [allProducts, setAllProducts] = useState([])
    const [requireProduct, setRequireProduct] = useState([])


    useEffect(() => {
        getAllProducts();
      }, [])
      const getAllProducts = () => {
        fetch("http://localhost:5000/api/getAllProducts", {
          method: "GET",
        }).then((res) => res.json())
          .then((data) => {
            console.log(data, "products");
            setAllProducts(data.data)

            // const all = allProducts.slice(0,3)
            // console.log(all);
            // setRequireProduct(requireProduct.push(all))
            // console.log(requireProduct);
          })
      }
    const navigate = useNavigate()

  return (
    <div className='w-full bg-white min-h-[80vh] py-10'>
        <p className=' text-center text-xs md:text-sm tracking-widest'>STAY UPDATED ON WHAT'S NEW</p>
        <h1 className=' text-center text-2xl md:text-3xl tracking-wider pt-3 font-medium'>New arrivals</h1>

        <div className='md:max-w-6xl max-w-sm mx-auto pt-12'>
            
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            {
            allProducts.slice(0,3).map((element,index)=>{
                console.log(element.price);
                return(
                    <div className='flex flex-col items-center gap-3 bg-red-500'>
                    <img src={element.image} className='max-h-[65vh] w-full'></img>
                    <h1 className='tracking-wide font-medium'>{element.name}</h1>
                    <p>{element.price}</p>
                    <p className='text-sm text-gray-400'>1 color available</p>
                    <button className='px-8 py-2 bg-white border-2 border-black text-sm hover:bg-black hover:text-white transition-all duration-500 ease-in'
                    onClick={() => {navigate("/productDetails",{state:element})}}
                    >QUICK VIEW</button>
                </div>
            )

            })
          }
               
                {/* <div className='flex flex-col items-center gap-3'>
                    <img src='../newArrival3.jpg'  className='max-h-[65vh] w-full'></img>
                    <h1 className='tracking-wide font-medium'>LOREM IPSUM</h1>
                    <p>$140.00</p>
                    <p className='text-sm text-gray-400'>1 color available</p>
                    <NavLink to='/productDetails'> <button className='px-8 py-2 bg-white border-2 border-black text-sm hover:bg-black hover:text-white transition-all duration-500 ease-in'>QUICK VIEW</button></NavLink>
                </div>
                
                <div className='flex flex-col items-center gap-3'>
                    <img src='../newArrival2.jpg'  className='max-h-[65vh] w-full'></img>
                    <h1 className='tracking-wide font-medium'>LOREM IPSUM</h1>
                    <p>$140.00</p>
                    <p className='text-sm text-gray-400'>1 color available</p>
                    <button className='px-8 py-2 bg-white border-2 border-black text-sm hover:bg-black hover:text-white transition-all duration-500 ease-in'>QUICK VIEW</button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default NewArrivals