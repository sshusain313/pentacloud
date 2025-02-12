import React from 'react'
import OfficePic from '../assets/images/office.png'
import Dots from '../assets/images/dots.png'
import './Office.css'
const Office = () => {
  return (
    <>
    <div className='flex flex-row justify-between'>
        <div className='content mt-15 flex flex-col gap-5'>
        <img src={Dots} alt='dots' className='ml-15' style={{width:50, height:50}} />
        <h3 className='text-6xl font-bold w-full ml-15'>Empower your business with our comprehensive Salesforce Consulting services.</h3>
        <div className='flex flex-row text-white p-5 rounded-3xl justify-around ml-15 mt-10 h-40' style={{backgroundColor:'#102a98'}}>
            <div className='flex flex-col text-xl gap-3'>
             <p className='flex flex-row gap-3'><i class="fa-solid fa-circle-check"></i><span>People First</span></p>
             <p className='flex flex-row gap-3'><i class="fa-solid fa-circle-check"></i><span>Integrity</span></p>
             <p className='flex flex-row gap-3'><i class="fa-solid fa-circle-check"></i><span>Ownership</span></p>
            </div>
            <div className='flex flex-col text-xl gap-3'>
             <p className='flex flex-row gap-3'><i class="fa-solid fa-circle-check"></i><span>Growth</span></p>
             <p className='flex flex-row gap-3'><i class="fa-solid fa-circle-check"></i><span>Teamwork</span></p>
             <p className='flex flex-row gap-3'><i class="fa-solid fa-circle-check"></i><span>Communication</span></p>
            </div>
        </div>
        </div>
        <img src={OfficePic} alt='office' />
    </div>
    <div className='flex flex-row justify-center  m-30 ml-50 border border-gray-400 rounded-3xl w-[75%] shadow-lg' >
      <div className='flex flex-col gap-5 p-5'>
        <div className='flex flex-row  '><img src={Dots} className='ml-5' alt='dots' style={{width:50,height:50}} /><span className='mt-4'>01</span></div>
        <h3 className='text-xl font-bold ml-5'>STRATEGY</h3>
        <p className='ml-5 mb-5'>Crafting tailored Salesforce strategies to drive your business growth and innovation.</p>
      </div>
      <div className='planning  flex flex-col gap-5 p-5'>
        <div className='flex flex-row '><img src={Dots} className='ml-5' alt='dots' style={{width:50,height:50}} /><span className='mt-4'>02</span></div>
        <h3 className='text-xl font-bold ml-5'>PLANNING</h3>
        <p className='ml-5 mb-5'>Seamlessly planning your Salesforce implementation for optimal efficiency and success.</p>
      </div>
      <div class='vertical'></div>
      <div className='security flex flex-col gap-5 p-5'>
        <div className='flex flex-row justify-start '><img src={Dots} className='ml-5' alt='dots' style={{width:50,height:50}} /><span className='mt-4'>03</span></div>
        <h3 className='text-xl font-bold ml-5'>SECURITY</h3>
        <p className='ml-5 mb-5'>Ensuring robust Salesforce security to safeguard your data and business operations..</p>        
      </div>
      <div className='flex flex-col gap-5 p-5'>
      <div className='flex flex-row justify-start '><img src={Dots} className='ml-5' alt='dots' style={{width:50,height:50}} /><span className='mt-4'>04</span></div>
        <h3 className='text-xl font-bold ml-5'>SUPPORT</h3>
        <p className='ml-5 mb-5'>Providing reliable Salesforce support to keep your business running smoothly.</p>       
      </div>
    </div>
    </>
  )
}

export default Office