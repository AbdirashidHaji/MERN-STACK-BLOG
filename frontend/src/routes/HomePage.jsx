import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'

function HomePage() {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* <BREADCRUMB /> */}
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <span>.</span>
        <span className='text-blue-800'>Blogs and Articles</span>
      </div>
      {/* <INTRODUCTION /> */}il
      <div className='flex items-center justify-between'>
        {/*titles*/}
        <div className=''>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>Welcom To My Blog.</h1>
          <p className='mt-8 text-md md:text-xl'>Hey there! I'm so glad you stopped by. This is where I share my thoughts, ideas, and insights on various topics that inspire me—whether it's tech, life, or just random sparks of creativity.
Grab a cup of coffee, make yourself at home, and feel free to explore. I hope you find something here that sparks your curiosity or simply makes your day a little brighter.
Happy reading!</p>
        </div>
        {/* animated button */}
        <Link to="/write" className='hidden md:block relative '>
        <svg viewBox="0 0 200 200" width="200" height="200" 
        //className='text-lg tracking-widest  animate-spin animatedButton
        className='text-lg tracking-widest'>
         <path
           id="circlePath"
           fill='none'
          d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
         />
         <text>
          <textPath href='#circlePath' startOffset="0%">Explore Ideas</textPath>
          <textPath href='#circlePath' startOffset="50%">Stay Inspired</textPath>
         </text>
         </svg>
         <button className='absolute top-0 left-0 right-0 bottom-0 m-auto  w-24 h-24 bg-blue-800 rounded-full flex items-center justify-center'>
         <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.855 14.322a2.475 2.475 0 1 1 .133-4.241m6.053 4.241a2.475 2.475 0 1 1 .133-4.241M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
       </svg>

         </button>
        </Link>
      </div>
      {/* <GATERGORIES /> */}
      <MainCategories/>
      {/* <FEATURED POSTS /> */}
      <FeaturedPosts/>
      {/* <POSTLIST /> */}
      <div className=''>
        <h1 className='my-8 text-2xl text-gray-600'>Recents Post</h1>
        <PostList/>
      </div>
    </div>
  )
}

export default HomePage