import React from 'react'

function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className='flex items-center gap-4'>
        <img src='userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w="40"/>
        <span className='font-medium'>Abdirashid Haji</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
      <div className='mt-4'>
        <p className=''>This post covers the essential features of ES6 and beyond that every developer should know.this post covers the essential features of ES6 and beyond that every developer should know.</p>
      </div>
    </div>
  )
}

export default Comment