import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

function CartTotal() {
    const { currency, getCartAmount, delivery_fee } = useContext(ShopContext);

    const subTotal = getCartAmount() || 0; // Ensure fallback value
    const totalAmount = subTotal > 0 ? subTotal + delivery_fee : 0;

    return (
        <div className='w-full'>
            <div className="text-2xl">
                <Title text1={'cart'} text2={'total'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className="flex justify-between">
                    <p>Sub Total</p>
                    <p>{currency} {subTotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>{currency} {subTotal > 0 ? delivery_fee.toFixed(2) : '0.00'}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency} {totalAmount.toFixed(2)}</b>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
