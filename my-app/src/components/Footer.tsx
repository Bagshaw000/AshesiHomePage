import React from 'react'
import  '../styles/Footer.css'
import twitter from '../images/tweeter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/Instagram.jpg'
import medium from '../images/Medium.png'
import seal from '../images/Seal.png'
import lkdn from '../images/linkedin.png'
import youtube from '../images/youtube.png'

export default function Footer() {
  return (
    <div className=' bg-neutral-700 justify-center'> 
        <div className=' flex flex-row gap-4 footer w-9/12 '> 
        <div className='text-left  '>
            <div>
                <h1 className='text-3xl text-stone-400 mb-8 mt-16'>
                    Quick Links
                </h1>
            </div>
            

            <div className='flex flex-row gap-x-14 text-white'>

                <div>
                    <h1 className='footer-subheading'>University</h1><br />
                    <a href='' className='footer-info'>Webmail</a><br />
                    <a href='' className='footer-info'>Student Information System</a><br />
                    <a href=''className='footer-info'>Academic Calendar</a><br />
                    <a href=''className='footer-info'>Institutional Repository</a><br />
                </div>

                <div>
                    <h1 className='footer-subheading'>New Here?</h1><br />
                    <a href='' className='footer-info'>Our Campus</a><br />
                    <a href=''className='footer-info'>Alumni Stories</a><br />
                    <a href=''className='footer-info'>Campus Life Blog</a><br />
                    <a href=''className='footer-info'>Awards & Recognition</a><br />
                </div>

                <div>
                    <h1 className='footer-subheading'>For Businesses</h1><br />
                    <a href='https://www.ashesi.edu.gh/campus-life/living-here-2/career-services.html' className='footer-info'>Career Services Office</a><br />
                    <a href='https://www.collegecentral.com/ashesi/Employer.cfm' className='footer-info'>Recruit Ashesi Students</a><br />
                    <a href='https://www.ashesi.edu.gh/about/job-openings.html' className='footer-info'>Job Openings </a><br />
                    <a href='https://ashesi.org/' className='footer-info'>Support Ashesi</a><br />
                </div>

                <div className='grid gap-2'>
                    <form action="" method="post">
                    <div className='flex flex-row'>
                        <input type="text" name="" id="" placeholder='Enter your email here?' className='w-26 h-8 text-sm font-light text-center'/>
                        <input type="button" className=' bg-slate-400 text-white w-16 h-8 place-content-center' value="Email" />
                    </div>
                    
                    
                    </form>

                    <div className='flex flex-wrap w-40 gap-2'>
                        <div className='flex flex-row'>  
                            <img src={facebook} alt={facebook} className='footer-handle '/>
                            <img src={twitter} alt={twitter} className='footer-handle'/>
                            <img src={youtube} alt={youtube} className='footer-handle'/>
                            <img src={lkdn} alt={lkdn} className='footer-handle'/>
                        </div>
                    
                        <div className='flex flex-row'>
                            <img src={instagram} alt={instagram} className='footer-handle'/>
                            <img src={medium} alt={medium} className='footer-handle' />
                        </div>
                        

                    </div>
                </div>

            </div>
        </div>

    </div>
    
    
    <div className='flex flex-row  gap-4 footer w-9/12 '>
    <div className='text-left  '>
        <div>
            <h1 className='text-3xl text-stone-400 mb-8 mt-16'>
            Contact Us
            </h1>
        </div>
        

        <div className='flex flex-row gap-x-14 text-white'>

            <div>
                <h1 className='footer-subheading'>Street Address</h1><br />
                <h2  className='footer-info'>1 University Avenue, <br />
                        Berekuso, E/R (See Map Here)</h2>
               
            </div>

            <div>
                <h1 className='footer-subheading'>Postal Address</h1><br />
                <h2  className='footer-info'>PMB CT3, <br />
                    Cantonments, Accra.
                </h2>
              
            </div>

            <div>
                <h1 className='footer-subheading'>Phone & Email</h1><br />
                <h2  className='footer-info'>(T) +233 302 610 330 <br />
                    (E) info@ashesi.edu.gh
                </h2>
            </div>

            <div >
            
                 <h1 className='footer-subheading'>See Also</h1><br />
                <a href='' className='footer-info'>+ Ashesi Foundation</a><br />   
                <a href='' className='footer-info'>+ Climate Innovation Centre</a><br />   
                <a href='' className='footer-info'>+ Education Collaborative</a><br />   
            </div>

        </div>
    </div>
    </div>

     
    <div className='flex flex-row justify-start gap-4 footer w-9/12 h-60 '>
    <div className='text-left '>
        
        
        <div className='flex flex-row gap-x-14 text-white content-center'>

            <div>
               <img src={seal} alt={seal} className='w-40' />
               
            </div>

            <div>
                
                <h2  className='footer-info'>© Ashesi University. Est. 2002.  All rights reserved.
                </h2>
              
            </div>

            <div className='flex flex-row'>
               <a href=""className='footer-info'>Sites Policies</a>
               <h1 className='text-sm mx-3'>|</h1>
               <a href="" className='footer-info'>Site Map</a>
            </div>

            

        </div>
    </div>
    </div>




    </div>

   
  )
}
