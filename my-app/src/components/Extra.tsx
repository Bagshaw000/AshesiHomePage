import React from 'react'
import one from "../images/1.jpg"
import two from "../images/2.jpg"
import three from "../images/3.jpg"

export default function Extra() {
  return (
    <div className='flex flex-row gap-8 justify-center my-20'>
        <div className='justify-start'>

            <h1 className='font-semibold text-2xl text-left'>
                Experience Ashesi
            </h1>

            <img className='w-64 mt-8' src={one} alt=""  />

            <h1 className='text-left text-lg font-light mt-8'>For high schoolers and<br />
                prospective parents, and<br />
                everyone interested in our<br />
                model or partnerships,<br />
                here's how you can experience<br />
                Ashesi. <br />
                <a href="" className='justify-start'>Read more</a>    
            
            </h1>

        </div>

        <div>

            <h1 className='font-semibold text-2xl text-left'>
                Global Reach
            </h1>

            <img className='w-64 text-left mt-8' src={two} alt=""  />

            <h1 className='text-left text-lg font-light mt-8'>For high schoolers and<br />
                prospective parents, and<br />
                everyone interested in our<br />
                model or partnerships,<br />
                here's how you can experience<br />
                Ashesi.<br />
                <a href="" className='justify-start'>Read more</a>    
            </h1>

            
        </div>

        <div>

            <h1 className='font-semibold text-2xl text-left'>
                Support Our Work
            </h1>

            <img className='w-64 text-left mt-8' src={three} alt=""  />

            <h1 className='text-left text-lg font-light mt-8'>For high schoolers and<br />
                prospective parents, and<br />
                everyone interested in our<br />
                model or partnerships,<br />
                here's how you can experience<br />
                Ashesi.<br />
                <a href="" className='justify-start'>Read more</a>    
            </h1>

            
        </div>
    </div>
  )
}
