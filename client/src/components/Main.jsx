import React, { useEffect, useState } from 'react';
import MainPic from '../assets/images/Main.png';
import './Main.css';
import Dots from '../assets/images/dots.png';

const Main = () => {
  const [counter, setCounter]=useState(0);
  const [hunter, setHunter]=useState(0);

  useEffect(()=>{
    if(counter<25){
      var interval=setInterval(() => {
        setCounter((count)=>count+5)
      }, 500);
    }
    else{
      clearInterval(interval);
      setCounter(25);
    }
  },[counter])

  useEffect(()=>{
    if(hunter<25){
      var interval=setInterval(() => {
        setHunter((count)=>count+5)
      }, 500);
    }
    else{
      clearInterval(interval);
      setHunter(20);
    }
  },[hunter])


  return (
    <>
    <div className='flex flex-row justify-between'>
    <img src={MainPic} alt='main' className='main'/>
    <div className='main-text flex flex-col gap-5'>
     <h3 className='text-5xl font-bold'>Your Modern-Day <br/> Technology Partner</h3>
     <p className='text-md w-[45%] mt-5'>In order to enhance your Salesforce platform and we at pentacloud make sure it completely fits with your company operations, our team of qualified specialists customizes solutions. With the use of best practices and customized Salesforce interfaces, we help businesses increase efficiency, streamline processe, and improve customer satisfaction.</p>
    </div>
    </div>

    <div className='flex flex-row justify-around items-center mt-10 mb-10'>
    <div className='flex flex-col'>
     <img src={Dots} alt='dots' style={{width:50, height:50}} />
     <h3 className='text-6xl font-bold text-orange-500'>{hunter}+</h3>
     <p className='text-blue-700 font-bold'>Clients</p>
    </div>
    <div className='flex flex-col'>
    <img src={Dots} alt='dots' style={{width:50, height:50}} />
     <h3 className='text-6xl font-bold text-orange-500'>{counter}+</h3>
     <p className='text-blue-700 font-bold'>Salesforce Certifications</p>
    </div>
    <div className='flex flex-col'>
    <img src={Dots} alt='dots' style={{width:50, height:50}} />
     <h3 className='text-6xl font-bold text-orange-500'>4.9+</h3>
     <p className='text-blue-700 font-bold'>Clients Review</p>
    </div>
    <div className='flex flex-col'>
    <img src={Dots} alt='dots' style={{width:50, height:50}} />
     <h3 className='text-6xl font-bold text-orange-500'>{counter}+</h3>
     <p className='text-blue-700 font-bold'>Projects</p>
    </div>
    </div>
    </>
  )
}

export default Main
