import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location=useLocation();
  return (
    <div>
      Hello and welcome to the home
    </div>
  )
}

export default Home
