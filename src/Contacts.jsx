import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'


export default function Contacts() {
  return (
    <div className='flex items-center flex-col gap-24 mt-20'>
      <span className='text-7xl font-[Oswald] font-semibold'>Contacts</span>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faDiscord} className="text-[#5865F2] text-9xl" />
        <span className='text-5xl font-[Lato]'>| Discord</span>
      </div>
    </div>
  )
}
