import { Phone } from 'lucide-react'
import React from 'react'

const TobBar = () => {
  return (
    <div className=' bg-green-800 p-2 w-full h-[50px] text-white flex justify-start items-center flex-row'>
        <p className=' text-white text-bold flex justify-center items-center flex-row gap-2'>
            <span>
            <Phone />
            </span>
            <span>
            0550 31 65 53
            </span>
        </p>
    </div>
  )
}

export default TobBar