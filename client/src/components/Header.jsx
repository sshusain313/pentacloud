import React from 'react'
import PentacloudLogo from '../assets/images/Penta.png'
import Welcome from '../assets/images/Welcome.png'
// import { NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Header = () => {
    
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between h-25'>
     <img src={PentacloudLogo} alt='pentacloud-logo' style={{height:125, width:175, marginLeft:50}} />
     <div className='flex flex-row gap-10 justify-center items-center text-2xl mt-2 font-bold text-indigo-900 '>
        <NavLink to='/' className='bg-indigo-900 text-white p-3 rounded-md'>Home</NavLink>
        <NavLink to='/about' className=' p-3'>About</NavLink>
        
        <select className='w-30 '>
            <option>Services</option>
            <option>Salesforce Consulting</option>
            <option>Web Development</option>
            <option>Consulting And Training</option>
            <option>Digital Marketing</option>
            <option>App Development</option>
            <option>Data Migration</option>
        </select>
       
        <h2 className='p-3 cursor-pointer'>Contact</h2>
     </div>
     <button className='bg-indigo-900 text-white mb-5 mt-5 mr-15 font-bold p-4 rounded-3xl flex justify-center items-center gap-3 hover:scale-105'>Schedule Meet Now<i class="fa-solid fa-arrow-right mt-1"></i></button>
    </div>
    <img src={Welcome} alt='welcome' />
    <div className='flex flex-row justify-start items-center gap-15 ml-30'>
    <button className='text-white  font-bold p-4 rounded-3xl w-[15%] hover:scale-105' style={{backgroundColor:'#f24142'}}>GET STARTED <i class='fa-solid fa-arrow-right'></i></button>
    <button className='border rounded-3xl w-[15%]  font-bold p-4 rounded-3xl hover:scale-105'>LEARN MORE</button>
    </div>
    <h3 className='text-3xl text-center text-indigo-900 font-bold mt-25'>Pentacloud Certifications <br/>
      Your Badge of Trust and Expertise.</h3>
   </div>
)
}

export default Header