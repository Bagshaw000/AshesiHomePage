import React from 'react'
import Header from './Header'
import Mission from './Mission'
import Statistics from './Statistics'

export default function Body() {
  return (
    <div> 
    <div className="bg-[url('./images/Grad.jpg')] h-screen " >
    <Header></Header>
    <div className='content-end h-56'>
        <div className=''>
            <h1 className='text-3xl font-semibold text-white mt-[600px]'> Ashesi ranked among Africa's top 10 in<br /> 
            inaugural regional university ranking</h1>
        </div>
    
    </div>
   
    </div>
        <Mission></Mission>
        <Statistics></Statistics>
    </div>
  )
}
