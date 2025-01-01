import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../components/Title.jsx'
import { assets } from '../assets/assets.js';
import { Link, useNavigate } from 'react-router-dom'
import CartTotal from '../components/CartTotal.jsx';
function Cart() {
  const { products, currency, cartItems, updateQuantity ,token} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  let navigate = useNavigate();
  
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item]) {
            const productData = products.find((product) => product._id === items);
            tempData.push({
              _id: items,
              size: item,
              price: productData.price,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])

  return cartData.length > 0 ? (
    <div className='border-t pt-14'>
      <div className='text-2xl font-medium'>
        <Title text1={'your'} text2={'cart'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className="flex items-start gap-6">
                  <img src={productData.image[0]} alt={productData.name} className="w-16 sm:w-20" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency} {(productData.price * item.quantity).toFixed(2)}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                    type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center' />
                </div>
                <div>
                  <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt="bin_icon" className="w-4 mr-4 sm:5 cursor-pointer" />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button onClick={() => navigate(token ? '/place-order' : '/login')} className='bg-black text-white text-sm my-8 px-8 py-3 uppercase'>proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className='w-full border-t border-b bg-gray-50 text-center py-8 flex items-center justify-center'>
        <div className="flex gap-2 text-sm text-gray-700 uppercase font-medium">
          <Link to='/'>Home</Link>
          <p>Cart</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center pt-12 sm:pt-24'>
        <img src={assets.cart_icon} alt="cart_icon" className='mb-5' />
        <p className='text-xl mb-6'>No items found in cart</p>
        <Link to='/collection' className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 uppercase'>Shop Now</Link >
      </div>
    </div>
  )
}

export default Cart