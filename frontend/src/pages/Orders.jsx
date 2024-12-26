import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { data } from 'react-router-dom';

function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'my'} text2={'orders'} />
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} alt={item.name} className="w-16 sm:w-20" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p> {currency}{item.price} </p>
                    <p> Quantity: 1</p>
                    <p> Size: S </p>
                  </div>
                  <p class="mt-1">Date: <span class=" text-gray-400">Thu Dec 26 2024</span></p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Teack Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders