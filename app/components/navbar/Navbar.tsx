import Image from 'next/image'
import React from 'react'
import { NAV_ITEMS } from './constants'

const Navbar = () => {
  return (
  <div className='navbar'>
    <div className='bar'>
      <div className='flex'>
      <div className='bar_img'>
        <Image 
        src={'/images/logo.png'}
        alt=''
        width={114}
        height={64}
        />
      </div>

      <nav className='bar_li'>
        {NAV_ITEMS.map((item)=>(
          <li className='list-none' key={item.id}> {item.title} </li>
        ))}
      </nav>
      </div>
      <div className='bar_end'>
        <h2 className='h21'>
          SINC With Us
        </h2>

        <h2 className='h22'>
          Apply to Sip 1.0
        </h2>
      </div>
    </div>
  </div>
  )
}

export default Navbar