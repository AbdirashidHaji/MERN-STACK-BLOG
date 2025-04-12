import React from 'react'
import { Link } from 'react-router-dom'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'

function SinglePostPage() {
  return (
    <div className='flex flex-col gap-8'>
      {/* Details */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
        <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold '>Exploring the fundamentals of web design and UX principles.</h1>
        <div className='flex items-center gap-4 text-gray-400 text-sm'>
        <span>Written By:</span>
        <Link className='text-blue-800'>Abdirashid Haji</Link>
        <span>on</span>
        <Link className='text-blue-800'>Web Design</Link>
        <span>2 Days Ago</span>
        </div>
        <p className='text-gray-500 font-medium'>
          Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.
     </p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <img src='postImg.jpeg' alt='Post' className='rounded-3xl' w="600" />
        </div>
      </div>
      {/* Contents */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* texts */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know. </p>
          <p>Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know. </p>
          <p>Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know. </p>
          <p>Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know. </p>
          <p>Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know.Explore the top JavaScript techniques used by professionals to write cleaner, faster, and more maintainable code. From arrow functions to destructuring and beyond. This post covers the essential features of ES6 and beyond that every developer should know. </p>
        </div>
        {/* menu */}
        <div className='px-4 h-max sticky top-8'>
          {/*author*/}
          <h1 className='mt-8 mb-4 text-sm font-medium'></h1>
          <div className=''>
            <img src='userImg.jpeg' className='w-12 h-12 rounded-full object-cover' w="48" h="48"/>
            <Link to="/" className=''>Abdirashid</Link>
            <p>Web Dev</p>
            <div className='flex gap-2'>
              <Link>
               <img src='facebook.svg'/>
              </Link>
              <Link>
               <img src='instagram.svg'/>
              </Link>
            </div>
          </div>
          <PostMenuActions/>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
          <Link className='underline'>All</Link>
          <Link className='underline' to="/">Web Design</Link>
          <Link className='underline' to="/">Development</Link>
          <Link className='underline' to="/">Databases</Link>
          <Link className='underline' to="/">Search Engines</Link>
          <Link className='underline' to="/">Marketing</Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search/>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage