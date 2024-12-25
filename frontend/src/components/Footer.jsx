import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="logo" className='w-32 mb-5' />
          <p className='w-full nd:w-2/3 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 uppercase'>Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 uppercase'>Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p class="py-5 text-sm text-center">Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>
    </>
  )
}

export default Footer