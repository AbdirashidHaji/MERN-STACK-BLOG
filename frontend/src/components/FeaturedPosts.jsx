import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

function FeaturedPosts() {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/* First Posts  */}
      <div className='w-full lg:w-1/2 flex-col gap-4'>
      {/*image */}
      <img src="featured1.jpeg" className="rounded-3xl object-cover"/>
      {/*details */}
      <div className='flex items-center gap-4'>
        <h1 className='font-semibold ;lg:text-lg'>01.</h1>
        <Link to="" className="text-blue-800 lg:text-lg">Web Design</Link>
        <span className='text-gray-500'>2 days ago</span>
      </div>
      {/*titles */}
      <Link to="" className='text-xl lg:text-3xl font-semibold lg:font-bold'>
      Welcome to My Blog! Hey there! I'm so glad you stopped by. This is where I share my thoughts, ideas, and insights
      </Link>
      </div>
      {/* other Posts  */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
      {/*second */}
      <div className='lg:h-1/3 flex justify-between gap-4'>
      <div className='w-1/3 aspect-video'>
      <img src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full " w="298"/>
      </div>
      
       {/*details and titles */}
       <div className='w-2/3'>
       {/*details */}
       <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
        <h1 className='font-semibold'>02.</h1>
        <Link to="/test" className="text-blue-800 lg:text-lg">Web Design</Link>
        <span className='text-gray-500 text-sm'>2 days ago</span>
       </div>
       {/*titles */}
       <Link to="" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>This is the biggest apect of life in this word of course</Link>
       </div>
      </div>
      {/*third */}
      <div className='lg:h-1/3 flex justify-between gap-4'>
      <div className='w-1/3 aspect-video'>
      <img src="featured3.jpeg" className="rounded-3xl object-cover w-full h-full " w="298"/>
      </div>
       {/*details and titles */}
       <div className='w-2/3'>
       {/*details */}
       <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
        <h1 className='font-semibold'>02.</h1>
        <Link to="/test" className="text-blue-800 lg:text-lg">Web Design</Link>
        <span className='text-gray-500 text-sm'>2 days ago</span>
       </div>
       {/*titles */}
       <Link to="" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>This is the biggest apect of life in this word of course</Link>
       </div>
      </div>
      {/*fourth */}
      <div className='lg:h-1/3 flex justify-between gap-4'>
      <div className='w-1/3 aspect-video'>
      <img src="featured4.jpeg" className="rounded-3xl object-cover w-full h-full " w="298"/>
      </div>
       {/*details and titles */}
       <div className='w-2/3'>
       {/*details */}
       <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
        <h1 className='font-semibold'>02.</h1>
        <Link to="/test" className="text-blue-800 lg:text-lg">Web Design</Link>
        <span className='text-gray-500 text-sm'>2 days ago</span>
       </div>
       {/*titles */}
       <Link to="" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>This is the biggest apect of life in this word of course</Link>
       </div>
      </div>

      </div>
    </div>
  )
}

export default FeaturedPosts