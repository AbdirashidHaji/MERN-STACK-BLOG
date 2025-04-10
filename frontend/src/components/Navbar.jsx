import React, { useState } from 'react'
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function Navbar() {
    const [open,setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/*lOGO*/}
        <Link to="/" className='flex items-center gap-4 text-2xl font-bold'>
            <img src="/logo.png" className='w-8 h-8' alt="Logo"/> 
            <span>ABRDHJR</span>
        </Link>
        {/*MOBILE MENU BOTON*/}
        <div className='md:hidden'>
            <div className='cursor-pointer text-4xl' 
            onClick={() => setOpen((prev) => !prev)}>
                {open ? "X" : "☰"}
            </div>
            {/*MOBILE LIST*/}
            <div
          className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 front-medium text-lg absolute top-16  transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
                <Link to='/'>Home</Link>
            <Link to='/posts'>Trending</Link>
            <Link to='/:slug'>Most Popular</Link>
            <Link to='/write'>About</Link>
            <Link to='/login'>
                <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login👌</button>
            </Link>
            
            </div>
        </div>
        {/*DESTOP MENU*/}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 front-medium'>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Trending</Link>
            <Link to='/:slug'>Most Popular</Link>
            <Link to='/write'>About</Link>
            <SignedOut>
            <Link to='/login'>
                <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login👌</button>
            </Link>
            
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
          
        </div>
    </div>
  )
}

export default Navbar