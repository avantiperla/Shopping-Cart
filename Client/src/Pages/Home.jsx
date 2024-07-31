import React from 'react'
import NewArrivals from '../Components/NewArrivals'
import ClothingForAll from '../Components/ClothingForAll'
import Cards2 from '../Components/Cards2'
import Newsletter from '../Components/Newsletter'


const Home = () => {
  return (
    <div className='md:pt-20 min-h-[90vh] w-full'>
      <div className='w-full md:min-h-[80vh] flex flex-col relative bg-red-200'>
        <img src='../bg2.jpg' className='md:min-h-[80vh] min-h-[40vh]'></img>

        <p className='absolute top-[45%] left-[5%] md:top-[50%] md:left-[10%] text-lg md:text-3xl font-medium'>We are <span className='text-yellow-400'>More</span> than clothes. <button className='bg-white py-2 px-4 text-sm md:text-base ml-3 md:ml-5'>Explore Collection</button></p>
      </div>

      <NewArrivals/>

      <ClothingForAll/>

      <Cards2/>
      
      <Newsletter/>
      

    </div>
  )
}

export default Home