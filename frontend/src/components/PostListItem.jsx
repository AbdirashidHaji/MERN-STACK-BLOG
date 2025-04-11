import React from 'react'
import { Link } from 'react-router-dom'

function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* Image */}
        <div className='md:hidden xl:block xl:w-1/3'>
            <img src='postImg.jpeg' alt='' className='rounded-2xl object-cover'/>
        </div>
        {/* details */}
        <div className='flex flex-col gap-4 xl:w-2/3'>
            <Link to="/posts" className="text-4xl font-semibold">Welcome to my blog site if you are new please signup thank you welcome once more</Link>
            <div className='flex items-center gap-2 text-gray-400 text-sm'>
                <span>Written by:</span>
                <Link className="text-blue-800">Abdirashid Haji</Link>
                <span>on</span>
                <Link>Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus soluta sed earum qui dolores, repellat reprehenderit veniam, ea excepturi odio neque animi perferendis officia, eum explicabo deleniti commodi minus. Eius.</p>
            <Link to="/posts" className='underline text-blue-800 text-sm'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem