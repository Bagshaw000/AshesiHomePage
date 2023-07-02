import React from 'react'
import student from "../images/ApplyStudent.jpg"
import career from "../images/CareerAshesi.jpg"

export default function Mission() {
  return (
    <div>
        <h3 className='font-light text-4xl text-gray-600 mt-16'>
            Our mission is to edicate ethical<br /> 
            entrepreneurial leaders in Africa;
        </h3>

        <h1 className='font-extralight text-xl  text-gray-600 mt-6'>
            to cultivate within students, the critical thinking skils, the <br /> 
            concern for others, and the courage it will take to <br /> 
            transform the continent.
        </h1>

        <h4 className='font-regular text-2xl text-gray-600 mt-6'>
            Where do you see yourself at Ashesi?
        </h4>

        <div className='flex flex-row justify-center space-x-4 mt-6 mb-14'>
            <div>
                <img src={student} alt={student} className='w-60'/>
                <a className='font-bold text-gray-700'>
                    APPLY TO BE A STUDENT
                </a>
            </div>
            <div>
            <img src={career} alt={career} className='w-60'/>
                <a href="/dashboard" className='font-bold text-gray-700'>
                    PUESUE A CAREER AT ASHESI
                </a>
            </div>
        </div>

    </div>
  )
}
