import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Cookie from './components/Cookie';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import Unsubscribe from './components/Unsubscribe'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router=createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
      path: '/unsubscribe',
      element: <Unsubscribe />,
    },
    {
      path: '/cookie',
      element: <Cookie />,
    },
    {
      path: '/terms',
      element: <Terms />,
    },
    {
      path: './privacy',
      element: <PrivacyPolicy />
    }
])
  return (
     <RouterProvider router={router} />

  )
}

export default App