import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'contact'} text2={'us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <div className='w-full md:max-w-[480px]'>
          <img src={assets.contact_img} alt="contact_img" />
        </div>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p class="font-semibold text-xl text-gray-600">Our Store</p>
          <p class=" text-gray-500">54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p class=" text-gray-500">Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
          <p class="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p class=" text-gray-500">Learn more about our teams and job openings.</p>
          <button class="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact