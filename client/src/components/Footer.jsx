import React from 'react'
import { Link } from 'react-router-dom'
import PentacloudLogo from '../assets/images/PentacloudLogo.png'
const Footer = () => {
  return (
   
        <footer className='bg-slate-300 w-full flex flex-col h-200 justify-between '>
          <div className='flex flex-row justify-center items-center gap-25 ml-40 m-25 border rounded-3xl p-2 w-[80%] h-400 ' style={{backgroundColor: '#102a98'}}>
           
           <p className='text-yellow-300 text-3xl w-90 mt-5 '>Start the conversation with a free 10-minute consultation</p>
           <div className='flex flex-col gap-5 mt-5'>
           <input type='text' className='text-black p-2 h-10 bg-white rounded-lg ' placeholder='Email' />
           <p className='text-white text-md'>Let’s discuss IT strategy, services, <br/> and business solutions & compliance concerns</p>
           </div>
           <button className='bg-red-500 p-4 mb-13 text-white font-bold w-60 h-15 rounded-3xl mt-5'>Book Now</button>
          </div>
          <div className='flex justify-center h-500 gap-20'>
          <div className='flex flex-col mt-10'>
          <img src={PentacloudLogo} alt='pentacloud-logo'  style={{height:100, width:150}} />
          <p className='w-50'>Seize the digital spotlight and boost your business with pentacloud.</p>
          <p className='mt-3 text-md mb-1'>Follow Us</p>
          <div className='flex font-md gap-3'>
          <p><i class="fa-brands fa-linkedin-in text-lg"></i></p>
          <p><i className="fa-brands fa-square-twitter text-lg"></i></p>
          </div>
          </div>
          <div>
          <div className='flex flex-col gap-10 mt-15'>
            <div className='flex flex-col gap-2'>
            <h3 className='text-indigo-800 text-md font-bold'>ABOUT</h3>
            <div className='flex flex-col '>
            <p>Our Story</p>
            <p>The Team</p>
            </div>
            </div>
            <div className='flex flex-col gap-2'>
            <h3 className='text-indigo-800 text-md font-bold'>CONTACT</h3>
            <div className='flex flex-col'>
            <p><i className='fa-solid fa-phone mr-2' />+91-7996363343</p>
            <p><i className='fa-solid fa-envelope mr-3' />contactus@pentacloudconsulting.com</p>
            </div>
          </div>
          </div>
          </div>
          <div className='flex flex-col mt-15 gap-3'>
          <h3 className='text-md font-bold text-indigo-800 '>SERVICES</h3>
          <div className='flex flex-col gap-2'>
          <span className='flex flex-row gap-2'><i class="fa-solid fa-circle-arrow-right mt-2"></i><p className='flex flex-row gap-2'>Salesforce Consulting</p></span>
          <span className='flex flex-row gap-2'><i class="fa-solid fa-circle-arrow-right mt-2"></i><p className='flex flex-row gap-2'>Web Development</p></span>
          <span className='flex flex-row gap-2'><i class="fa-solid fa-circle-arrow-right mt-2"></i><p className='flex flex-row gap-2'>Consulting And Training</p></span>
          <span className='flex flex-row gap-2'><i class="fa-solid fa-circle-arrow-right mt-2"></i><p className='flex flex-row gap-2'>App Development</p></span>
          <span className='flex flex-row gap-2'><i class="fa-solid fa-circle-arrow-right mt-2"></i><p className='flex flex-row gap-2'>Data Migration</p></span>
          </div>
          </div>
          <div className='w-50 mt-15'>
          <h3 className=' text-md font-bold text-indigo-800 mb-2'>ADDRESS</h3>
          <span className='flex flex-row gap-2'><i class="fa-sharp fa-solid fa-location-dot mt-2" ></i><Link to='/'><p className='flex flex-row gap-2 hover:text-blue-800'>Jagan Arcade, 4th Floor, 1st main Road, Post, Anandnagar, RT Nagar, Bangaluru, Karnataka 560032</p></Link></span>
          </div>
          </div>
          <div className='flex text-white p-2 justify-between' style={{backgroundColor: '#102a98'}}>
            <p className='ml-10 mt-2 mb-2'>Privacy Policy</p>
            <p className='mr-10 mt-2 mb-2'>Copyright @ 2025 Pentacloud</p>
          </div>
        </footer>
  )
}

export default Footer