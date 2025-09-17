import React from 'react'
import { FaExclamationTriangle } from "react-icons/fa";

const ServerDown = () => {
  return (
    <div className='w-full min-h-screen bg-gray-600 text-gray-600 flex justify-center items-center'>
        <div className='bg-gray-200 flex flex-col md:w-1/3 p-5 rounded-lg shadow-lg items-center gap-3'>
            <p>Server  unavailable.</p>
            <FaExclamationTriangle className='text-3xl text-yellow-600' />
            <p>Contact mail.qashifpeer[at]gmail.com to get more information.</p>
        </div>
    </div>
  )
}

export default ServerDown