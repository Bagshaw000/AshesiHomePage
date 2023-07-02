import React from 'react'
import seal from "../../src/images/logo.png";

export default function Header() {
  return (
    
    <div className='flex flex-row justify-center border-b place-items-center h-20 w-full '>
    
       
      
        <div className=' mr-28 '><img src={seal} alt="" className='h-8 w-32' /></div>
        
        <nav className="flex flex-row space-x-8 my-4 text-lg font-medium text-white">
          <a href="/dashboard" className="">Home</a>
          <a href="/team" className="">About</a>
          <a href="/projects" className="">Admission</a>
          <a href="/reports" className="">Academics</a>
          <a href="/reports" className="">StudentLife</a>
          <a href="/reports" className="">News</a>
          <a href="/reports" className="">Useful Links</a>
          <a href="/reports" className="">Donate</a>
        </nav>
      
      
    </div>
  )
}
