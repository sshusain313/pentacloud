import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
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
    }
])
  return (
     <RouterProvider router={router} />

  )
}

export default App