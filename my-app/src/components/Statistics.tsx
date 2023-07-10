import React from 'react'

export default function Statistics() {
  return (
    <div className='  bg-neutral-500 h-64  ' >
      <div className='flex flex-row space-x-20 justify-center place-self-center '>      
        <div className='border-r border-white  text-neutral-200 font-light w-1/4'>
          <h1 className='text-8xl font-light'>1:1</h1>
          <h1 className='text-xl font-thin'>GENDER BALANCE</h1>
        </div>
       
        <div className='border-r border-white  text-neutral-200  w-1/4 '>
          <h1 className='text-8xl font-light' >43%</h1>
          <h1 className='text-xl font-thin'>ON SCHOLARSHIPS</h1>
        </div>
  
   

        <div className='text-neutral-200'>
          <h1 className='text-8xl font-light'>3100</h1>
          <h1 className='text-xl font-thin'>STUDENT & ALUMINI</h1>
        </div>
      </div>


    </div>
  )
}
