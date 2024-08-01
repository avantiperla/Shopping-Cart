import React from 'react'
import { products } from '../data'
import WomenCard from '../Components/WomenCard'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Women = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, [])
      

      const getAllProducts = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/getAllProducts");
          setAllProducts(response.data.data);
        } catch (error) {
          console.error("Error fetching products", error);
        }
      };
    
  return (
    <div className='md:pt-40 min-h-[90vh] w-full md:max-w-7xl max-w-sm mx-auto pt-12 '>
        <div className='flex flex-col  w-[70%] md:w-[45%] gap-6 md:ml-16 mb-10'>
            <h1 className='text-3xl font-normal tracking-wide'>SHOP FOR WOMEN</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 font-normal text-sm cursor-pointer'>
                <div>Collection 01</div>
                <div>Collection 02</div>
                <div>Collection 03</div>
                <div>Collection 04</div>
            </div>
        </div>

        {
        <div className='grid md:grid-cols-4 gap-1 mb-10'>
          {
            allProducts.map((product)=>{
                // console.log(product);

                return <WomenCard product={product}/>
            })
          }
        </div>         
      }
    </div>
  )
}

export default Women