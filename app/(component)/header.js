'use client'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const navShow = ()=>{
const x = document.getElementById('nav')
if(x.style.display ==  'block'){

  x.style.display = 'none'
}
else{x.style.display = 'block'}
  }
  return (
    <div>    <div className='mx-12 flex justify-between p-5'>
        <div className='text-2xl font-light'>Kajetan Daroch</div>
        <div className=' hidden md:block '>
            <ul className='flex  gap-x-4' > 
                <li className='font-bold'>BLOG</li>
                <li className='font-bold'>ABOUT</li>
                <li className='font-bold'>LINKS</li>
                <li className='font-bold'>PROJECTS</li>
            </ul>
 
        </div>
           <ul className='bg-black fles-1 py-5 justify-center mr-6 hidden text-center bg-cover w-full bg-opacity-20  gap-x-4' id='nav'> 
                <li className='font-bold'>BLOG</li>
                <li className='font-bold'>ABOUT</li>
                <li className='font-bold'>LINKS</li>
                <li className='font-bold'>PROJECTS</li>
            </ul>
           <button onClick={navShow} className='md:hidden text-4xl mb-28'><GiHamburgerMenu /></button> 
    </div>
    </div>

  )
}

export default Header