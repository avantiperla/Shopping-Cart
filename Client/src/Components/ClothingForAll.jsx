import React from 'react'

const ClothingForAll = () => {
  return (
    <div className='w-full min-h-[80vh] py-10'>
        <p className=' text-center text-xs md:text-base tracking-widest'>CLOTHING FOR ALL</p>
        <h1 className=' text-center text-2xl md:text-6xl tracking-wider pt-7 font-medium'>Bombus <span className='text-yellow-400'>Adaptive</span> Clothing</h1>

        <div className=' pt-12'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='relative bg-yellow-200'>
                    <img src='../image1.png' className='h-[50vh] md:h-[80vh] w-full'></img>
                    <h1 className='text-white absolute left-[30%] top-[45%] text-2xl md:text-4xl font-medium'>COMFORT WEAR</h1>
                </div>

                <div className='relative'>
                    <img src='../image2.png' className=' h-[50vh] md:h-[80vh] w-full'></img>
                    <h1 className='text-white absolute left-[30%] top-[45%] text-2xl md:text-4xl font-medium'>EASY ACCESS CLOTHING</h1>
                </div>

                <div className='relative'>
                    <img src='../image3.png' className='h-[50vh] md:h-[80vh] w-full'></img>
                    <h1 className='text-white absolute  left-[30%] top-[45%] text-2xl md:text-4xl font-medium'>SEATED WEAR</h1>
                </div>

                <div className='relative'>
                    <img src='../Images/jpeg-optimizer_image5.jpg' className='h-[50vh] md:h-[80vh] w-full'></img>
                    <h1 className='text-white absolute  left-[30%] top-[45%] text-2xl md:text-4xl font-medium'>EASY CLOSURE</h1>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ClothingForAll