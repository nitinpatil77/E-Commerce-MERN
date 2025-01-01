import React, { useContext, useState } from 'react'
import Title from '../components/Title.jsx';
import CartTotal from '../components/CartTotal.jsx'
import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

function PlaceOrder() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('cod');
  const { backendUrl, token, cartItems, setCartItems, getCartAmount, products, delivery_fee } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items));
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        // API Calls for COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
            toast.success(response.data.message)
          } else {
            toast.error(response.data.message)
          }
          break;
        case 'stripe':

          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }
          break;
        default:
          break;
      }

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'delivery'} text2={'information'} />
        </div>
        <div class="flex gap-3">
          <input onChange={onChangeHandler} value={formData.firstName} name="firstName" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" required />
          <input onChange={onChangeHandler} value={formData.lastName} name="lastName" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" required />
        </div>
        <div>
          <input onChange={onChangeHandler} value={formData.email} name="email" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" required />
        </div>
        <div>
          <input onChange={onChangeHandler} value={formData.street} name="street" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" required />
        </div>
        <div class="flex gap-3">
          <input onChange={onChangeHandler} value={formData.city} name="city" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" required />
          <input onChange={onChangeHandler} value={formData.state} name="state" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" required />
        </div>
        <div class="flex gap-3">
          <input onChange={onChangeHandler} value={formData.zipcode} name="zipcode" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" required />
          <input onChange={onChangeHandler} value={formData.country} name="country" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" required />
        </div>
        <div>
          <input onChange={onChangeHandler} value={formData.phone} name="phone" class="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" required />
        </div>
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'payment'} text2={'method'} />
          {/* payment method */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''} `}></p>
              <img src={assets.stripe_logo} alt="stripe_logo" className='h-5 mx-4' />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''} `}></p>
              <img src={assets.razorpay_logo} alt="razorpay_logo" className='h-5 mx-4' />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''} `}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          {/* Navigate to order page */}
          <div className="w-full text-end">
            <button type='submit' className='bg-black text-white text-sm my-8 px-8 py-3 uppercase'>Place Order</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder