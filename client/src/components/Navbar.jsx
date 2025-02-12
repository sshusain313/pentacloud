import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className='nav bg-indigo-800 text-white' style={{backgroundColor: '#102a98'}}>
    <div className='text-md font-bold flex flex-row justify-between p-2'>
    <p className='ml-10'><i className="fa-regular fa-envelope mr-2"></i>contactus@pentacloudconsulting.com</p>
    <p className='mr-10'><i class="fa-solid fa-phone mr-2"></i>+91-7996363343</p>
    </div>
    </nav>
  </div>
  )
}

export default Navbar