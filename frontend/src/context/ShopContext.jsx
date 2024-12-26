import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const[search,setSearch]=useState('');
    const[showSearch,setShowSearch]=useState(false);
    const[cartItems,setCartItems]=useState({});

    const addToCart=async (itemId,size)=>{
        
        let cartData=structuredClone(cartItems); // deep copy of cartItems

        if(!size){
            toast.error('Select Product Size')
        }

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] =1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData )
    }
    
    const getCartCount =()=>{
        let totalCount=0;
        for (const items in cartItems) {
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount +=cartItems[items][item]
                    }
                }catch(error){
                        
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId,size,quantity)=>{

        let cartData=structuredClone(cartItems); // deep copy of cartItems
        cartData[itemId][size]=quantity;
        setCartItems(cartData)
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find(product => product._id === itemId);
            if (!itemInfo) continue;
    
            for (const size in cartItems[itemId]) {
                const qty = cartItems[itemId][size];
                totalAmount += itemInfo.price * qty;
            }
        }
        return totalAmount;
    };
    

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
