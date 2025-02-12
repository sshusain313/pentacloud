import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import l1 from '../assets/images/l1.png';
import l2 from '../assets/images/l2.png';
import l3 from '../assets/images/l3.png';
import l4 from '../assets/images/l4.png';
import l5 from '../assets/images/l5.png';
import l6 from '../assets/images/l6.png';

const Last = () => {
  return (
    <div className='flex flex-col m-40 gap-5 justify-center items-center'>
      <div className='flex flex-row gap-25 '>
      <Card style={{ width: '18rem' }} className='hover:scale-105 hover:p-3 hover:rounded-xl hover:border-1 hover:border-green-600'>
      <Card.Img variant="top" src={l1} />
      <Card.Body className='flex flex-col gap-3'>
        <Card.Title className='font-bold text-xl text-red-400 mt-7'>Integration</Card.Title>
        <Card.Text>
          Seamlessly Connecting Your Business With Salesforce Integration
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='hover:scale-105 hover:p-3 hover:rounded-xl hover:border-1 hover:border-green-600'>
      <Card.Img variant="top" src={l2} />
      <Card.Body className='flex flex-col gap-3'>
        <Card.Title className='font-bold text-xl text-red-400'>Whatsapp</Card.Title>
        <Card.Text>
        Integrate WhatsApp to enable real-time communication and enhance customer engagement.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='hover:scale-105 hover:p-3 hover:rounded-xl hover:border-1 hover:border-green-600'>
      <Card.Img variant="top" src={l3} />
      <Card.Body className='flex flex-col gap-3'>
        <Card.Title className='font-bold text-xl text-red-400 mt-10'>Data Cloud Benefits</Card.Title>
        <Card.Text>
        Leverage Data Cloud for secure, scalable, and efficient data storage and analytics.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='flex flex-row gap-25 mt-10'>
    <Card style={{ width: '18rem' }} className='hover:scale-105 hover:p-3 hover:rounded-xl hover:border-1 hover:border-green-600'>
      <Card.Img variant="top" src={l4} />
      <Card.Body className='flex flex-col gap-3'>
        <Card.Title className='font-bold text-xl text-red-400 mt-5'>Zapier</Card.Title>
        <Card.Text>
        tomate workflows by connecting apps through Zapier for improved productivity.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='hover:scale-105 hover:p-3 hover:rounded-xl hover:border-1 hover:border-green-600'>
      <Card.Img variant="top" src={l5} />
      <Card.Body className='flex flex-col gap-3'>
        <Card.Title className='font-bold text-xl text-red-400'>Social Channel</Card.Title>
        <Card.Text>
        Integrate social channels to boost your online presence and streamline social media management.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='hover:scale-105 hover:p-3 hover:rounded-xl hover:border-1 hover:border-green-600'>
      <Card.Img variant="top" src={l6} />
      <Card.Body className='flex flex-col gap-3'>
        <Card.Title className='font-bold text-xl text-red-400'>Marketing Cloud Benefits</Card.Title>
        <Card.Text>
        Utilize Marketing Cloud for personalized campaigns and data-driven marketing strategies.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Last