import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import InfiniteHScroll from './InfiniteHScroll'
import Main from './Main'
import Office from './Office'
import Footer from './Footer'
import Services from './Services'
import Last from './Last'
const Home = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <InfiniteHScroll />
    <Main />
    <Office />
    <Services />
    <Last />
    <Footer /> 
    </div>
  )
}

export default Home