import React, { useState } from 'react'
import Title from '../components/Title.jsx';
import CartTotal from '../components/CartTotal.jsx'
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const navigate=useNavigate();
  const [method, setMethod] = useState('cod');

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'delivery'} text2={'information'} />
        </div>
        <div class="flex gap-3">
          <input required="" name="firstName" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" value="" />
          <input required="" name="lastName" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" value="" />
        </div>
        <div>
          <input required="" name="email" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" value=""/>
        </div>
        <div>
          <input required="" name="street" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" value="" />
        </div>
        <div class="flex gap-3">
          <input required="" name="city" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" value=""/>
          <input name="state" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" value=""/>
        </div>
        <div class="flex gap-3">
          <input required="" name="city" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" value=""/>
          <input name="state" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" value=""/>
        </div>
        <div>
          <input required="" name="phone" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" value=""/>
        </div>
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        
        <div className="mt-12">
          <Title text1={'payment'} text2={'method'}/>
          {/* payment method */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' :''} `}></p>
              <img src={assets.stripe_logo} alt="stripe_logo" className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' :''} `}></p>
              <img src={assets.razorpay_logo} alt="razorpay_logo" className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' :''} `}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          {/* Navigate to order page */}
          <div className="w-full text-end">
            <button onClick={()=>navigate('/orders')} className='bg-black text-white text-sm my-8 px-8 py-3 uppercase'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder