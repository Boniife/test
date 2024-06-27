import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='footer_1'>
        <div className='foot'>
          <h2>
          Newsletter
          </h2>
          <p>
          Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
          </p>
        </div>
        <div className='foot2'>
          <input placeholder='enter your email address' />
          <button>Subscribe</button>
        </div>
      </div>

      <div className='border'/>

      <div className='footer_2'>

        <div className='footee'>
          <div className='leg'>
            <Image 
             src={'/images/white.png'}
             alt=''
             width={84}
             height={92}
            />
            <p>
            SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)
            </p>
          </div>

          <div className='legs'>
            <h3>Platforms</h3>
            <p>Kofoundme</p>
            <p>InResidency</p>
            <p>Service Market</p>
            <p>Founders School</p>
            <p>Metty</p>
            <p>Grantty</p>
            <p>Boldtell</p>
            <p>Chekwa</p>
          </div>
          <div className='legs'>
          <h3>About Us</h3>
            <p>Who We Are</p>
            <p>Our People</p>
            <p>Concept Innovation</p>
            <p>Our Process</p>
            <p>Investors Network</p>
            <p>Csr & Events</p>
            <p>Career</p>
            <p>Contact</p>
          </div>
          <div className='legs'>
          <h3>Initiatives</h3>
            <p>Jabi Plains</p>
            <p>Local Pricing Initiative</p>
            <p>Scholarship Program</p>
            <p>SSMN Pricing</p>
            <p>University STEM  </p>
            <p>University InResidency </p>
            <p>1M Nigeria </p>
            <p>Founders Festival </p>
          </div>
          <div className='legs'>
          <h3>More</h3>
            <p>Service</p>
            <p>Equity Jobs</p>
            <p>Eir Program</p>
            <p>Offers</p>
            <p>Innovaion news</p>
            <p>FAQ</p>
            <p>Blog & Resources</p>
            <p>Press</p>
          </div>
        <div className='border2'/>
        <div className='footee2'>
          <h3>Locations</h3><br />
          <p>Abuja Nigeria</p>
          <p>Lagos Nigeria</p>
          <p>Philadelphia, USA</p>
        </div>
        </div>
      <div className='border3' />
      </div>
      <div className='footer_3'>
        <div className='footee3 flex'>
          <div className=''>
          <p>
          Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!
          </p>
          <h3>
          ©2023 SINC Partners Ltd. All rights reserved
          </h3>
          </div>
          <div className='shoe'>
            <h4>
            Privacy Policy 
            </h4>
            <h4>Terms Of Service</h4>
            <h4>Security</h4>
          </div>
        </div>
        <div className='footee4'>
          <p>We are a business built on the foundation of Christian values and belief</p>
        </div>
      </div>
    </div>
  )
}

export default Footer