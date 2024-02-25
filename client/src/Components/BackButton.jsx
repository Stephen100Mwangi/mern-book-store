import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowBack } from "react-icons/ti";

const BackButton = ({ destination ='/'}) => {
  return (
    <div className='flex'>
        <Link
        to={destination}
        className='bg-sky-800 py-1 rounded-full flex items-center justify-center size-10 text-white'><TiArrowBack className='text-3xl' /></Link>
      
    </div>
  )
}

export default BackButton
