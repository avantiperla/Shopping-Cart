import React from 'react'

const Cards2 = () => {
    return (
        <div className='w-full bg-white min-h-[70vh] pt-16'>
            <p className=' text-center text-xs md:text-sm tracking-widest'>TESTIMONALS</p>
            <h1 className=' text-center text-2xl md:text-3xl tracking-wider pt-3 font-normal'>What our clients say</h1>

            <div className='md:max-w-6xl max-w-sm mx-auto mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                    <div className='flex flex-col py-7 px-8 gap-4 items-center bg-gray-100/60'>
                        <h1 className='text-2xl font-semibold'>* * * * *</h1>
                        <p className='text-sm text-center'>"Congratulations to Bombusfor this range of easy to get into clothes which are stylish and attractive and which I hope will become the mainstay of many wardrobes".</p>
                        <h1 className='text-base font-bold'>PETER D.</h1>
                    </div>

                    <div className='flex flex-col py-7 px-8 gap-4 items-center bg-gray-100/60'>
                        <h1 className='text-2xl font-semibold'>* * * * *</h1>
                        <p className='text-sm text-center'>"Congratulations to Bombusfor this range of easy to get into clothes which are stylish and attractive and which I hope will become the mainstay of many wardrobes".</p>
                        <h1 className='text-base font-bold'>PETER D.</h1>
                    </div>

                    <div className='flex flex-col py-7 px-8 gap-4 items-center bg-gray-100/60'>
                        <h1 className='text-2xl font-semibold'>* * * * *</h1>
                        <p className='text-sm text-center'>"Congratulations to Bombusfor this range of easy to get into clothes which are stylish and attractive and which I hope will become the mainstay of many wardrobes".</p>
                        <h1 className='text-base font-bold'>PETER D.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards2