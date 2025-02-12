import React from 'react'
import Blue from '../assets/images/Blue.png'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';
import s5 from '../assets/images/s5.png';
import s6 from '../assets/images/s6.png';

const Services = () => {
  return (
    <div className='flex flex-col h-150 ' style={{backgroundColor: '#102a98'}}>
    <div className='flex flex-col justify-center '>
     <div className='flex flex-row ml-10 mt-10'><img src={Blue} alt='blue' /><span className='text-md text-white pt-8'>OUR SERVICES</span></div>
    
    <div className='flex flex-col gap-5'>
    <div className='flex flex-row gap-5 justify-center'>
     <Card className='bg-white rounded-3xl hover:scale-105' style={{ width: '24rem' }} >
      <div className='flex flex-row justify-center m-3'>
      <Card.Img variant="top" className='mt-5' src={s1} style={{height:125, width:125}}/>
      <Card.Body className='m-3 '>
        <Card.Title className='text-blue-700 text-md font-bold'>Salesforce Consulting</Card.Title>
        <Card.Text className='text-md'>
          Unlock the full potential of your Salesforce investment with tailored consulting services.
        </Card.Text>
       
      </Card.Body>
      </div>
    </Card>
    <Card className='bg-white rounded-3xl hover:scale-105' style={{ width: '24rem' }}>
      <div className='flex flex-row justify-center m-3'>
      <Card.Img variant="top" className='mt-5' src={s2} style={{height:125, width:125}}/>
      <Card.Body className='m-3 '>
        <Card.Title className='text-blue-700 text-md font-bold'>Web Development</Card.Title>
        <Card.Text className='text-md'>
          Transform your digital presence with Pentacloud innovative web development solutions.
        </Card.Text>
      
      </Card.Body>
      </div>
    </Card>
    <Card className='bg-white rounded-3xl hover:scale-105' style={{ width: '24rem' }}>
      <div className='flex flex-row justify-center m-3'>
      <Card.Img variant="top" className='mt-5' src={s3} style={{height:125, width:125}}/>
      <Card.Body className='m-3 '>
        <Card.Title className='text-blue-700 text-md font-bold'>Consulting and Training</Card.Title>
        <Card.Text className='text-md'>
          Alligning workforce skills with pentacloud strategic goals for impactful results in the job market.
        </Card.Text>
       
      </Card.Body>
      </div>
    </Card>
    
    </div>
    <div className='flex flex-row gap-5 justify-center'>
    <Card className='bg-white rounded-3xl hover:scale-105' style={{ width: '24rem' }}>
      <div className='flex flex-row justify-center m-3'>
      <Card.Img variant="top" className='mt-5' src={s4} style={{height:125, width:125}}/>
      <Card.Body className='m-3 '>
        <Card.Title className='text-blue-700 text-md font-bold'>Digital Marketing</Card.Title>
        <Card.Text className='text-md'>
         Boost your brand visibility with our strategic digital marketing and creative campaigns.
        </Card.Text>
   
      </Card.Body>
      </div>
    </Card>
    <Card className='bg-white rounded-3xl hover:scale-105' style={{ width: '24rem' }}>
      <div className='flex flex-row justify-center m-3'>
      <Card.Img variant="top" className='mt-5' src={s5} style={{height:125, width:125}}/>
      <Card.Body className='m-3 '>
        <Card.Title className='text-blue-700 text-md font-bold'>App Development</Card.Title>
        <Card.Text className='text-md'>
         Transform your app ideas into reality with our intuitive, high-performance development services.
        </Card.Text>
       
      </Card.Body>
      </div>
    </Card>
    <Card className='bg-white rounded-3xl hover:scale-105' style={{ width: '24rem' }}>
      <div className='flex flex-row justify-center m-3'>
      <Card.Img variant="top" className='mt-5' src={s6} style={{height:125, width:125}}/>
      <Card.Body className='m-3 '>
        <Card.Title className='text-blue-700 text-md font-bold'>Data Migration</Card.Title>
        <Card.Text className='text-md'>
          Unlock the full potential of your Salesforce investment with tailored consulting services.
        </Card.Text>
     
      </Card.Body>
      </div>
    </Card>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Services