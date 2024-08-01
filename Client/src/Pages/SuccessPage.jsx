import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SuccessPage = () => {
    const [latestOrder, setLatestOrder] = useState({})

    useEffect(() => {
        getAllOrders();
    }, [])

    const [orders, setOrders] = useState([])
    const [priceT, setPriceT] = useState(0)
    const getAllOrders = async () => {
        let res = await axios.get("http://localhost:5000/api/getAllOrders")
        // setLatestOrder(res.data.data)

        let latestOrder = res.data.data
        console.log(res.data.data);
        // console.log(latestOrder.items);
        setOrders(latestOrder.items)
        setPriceT(latestOrder.totalPrice)

        // latestOrder.items.map((order) => {
        //     console.log(order.name);
        // })

    }
    return (
        <div className='md:pt-20 md:max-w-6xl max-w-sm mx-auto '>
            <div className=' border-gray-200 border-2 w-full flex flex-col justify-center items-center min-h-[80%]'>
                <div className='w-[60%] '>
                    <h1 className='text-5xl font-bold py-5'>Thanks For Ordering</h1>
                    <p className='text-lg text-gray-400 pb-5'>We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!</p>

                    {
                        // console.log(orders)
                        orders.map((element, index) => {
                            return (
                                <div>
                                    <div className='border-t-2 border-gray-200   max-h-56 mx-5 py-4 '>
                                        <div className='flex flex-col  w-full gap-4'>
                                            <div className='flex justify-between gap-12 items-center w-full '>
                                                <h1 className='text-md font-semibold w-96'>{element.name}</h1>
                                                <p className='text-green-600 font-semibold'>{element.price}</p>
                                            </div>
                                            <p className='w-full text-gray-700 font-normal text-xs text-left'>{element.description}</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }


                    <div className='flex justify-between border-t-2 border-gray-200 py-4'>
                        <h1 className='text-gray-600 text-base'>Total</h1>
                        <p className='font-semibold text-base'>{priceT}</p>
                    </div>
                    {/* {
                        latestOrder.items.map((order) => {
                            return (
                                <> */}


                    {/* </>
                            )
                        })
                    } */}
                </div>

            </div>

        </div>
    )
}

export default SuccessPage