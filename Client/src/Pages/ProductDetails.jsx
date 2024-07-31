import { useEffect } from 'react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import {useCart,useDispatchCart} from './ContextReducer'

const ProductDetails = () => {
    const location = useLocation()

    useEffect(()=>{
        console.log(location.state);
    })

    let dispatch = useDispatchCart();
    let data = useCart();


    const handleSubmit= async()=>{
        await dispatch({type:"ADD", id:location.state._id,name:location.state.name,image:location.state.image,price:location.state.price})
        console.log(data);
    }
    return (
        <div className='md:pt-20 min-h-[90vh] w-full'>
            <div className='md:max-w-6xl max-w-sm mx-auto py-12'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-1 md:gap-16'>
                    <div>
                        <img src={location.state.image} className='max-h-[85vh] w-full'></img>
                    </div>

                    <div className='flex flex-col'>
                        <div className='py-6 border-b-2 border-gray-300 flex flex-col gap-3'>
                            <h1 className='text-2xl font-normal'>{location.state.name}</h1>
                            <p className='text-xl font-normal'>$140.00</p>
                        </div>

                        <div className='flex flex-col'>
                            <div className='pt-5 flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold'>Size</h1>
                                <div className='flex gap-3'>
                                    <button className='px-4 py-2 border-2 border-gray-400'>S</button>
                                    <button className='px-4 py-2 border-2 border-gray-400'>M</button>
                                    <button className='px-4 py-2 border-2 border-gray-400'>L</button>
                                    <button className='px-4 py-2 border-2 border-gray-400'>XL</button>
                                    <button className='px-4 py-2 border-2 border-gray-400'>XXL</button>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold'>Color</h1>
                                <button className='w-36 px-5 py-2 border-2 border-gray-400 flex gap-4'>
                                    <div className='bg-black rounded-full w-7 h-7'></div>
                                    <p>Black</p>
                                </button>
                            </div>

                            <div className='pt-5 flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold'>Material</h1>
                                <div className='flex gap-3'>
                                    <button className=' px-5 py-2 border-2 border-gray-400 '>Sequins/Bamboo</button>
                                    <button className=' px-5 py-2 border-2 border-gray-400'>Pleather/Bamboo</button>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col gap-2'>
                                <h1 className='text-lg font-semibold'>Size</h1>
                                <div className='flex gap-3'>
                                    <button className='px-4 py-2 border-2 border-gray-400'>-</button>
                                    <div className='px-4 py-2 border-2 border-gray-400'>1</div>
                                    <button className='px-4 py-2 border-2 border-gray-400'>+</button>
                                </div>
                            </div>

                            <div className='pt-5'>
                                <button className='w-full py-5 bg-black text-white tracking-wide' onClick={handleSubmit}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails