import React, { useContext, useEffect, useState } from 'react'
import Title from './Title.jsx'
import { ShopContext } from '../context/ShopContext.jsx'
import ProductItem from './ProductItem.jsx';

function RelatedProducts({category,subCategory}) {
    const {products}=useContext(ShopContext);
    const [related,setRealted]=useState([]);

    useEffect(()=>{
        if(products.length>0){
          let productCopy=[...products];
            productCopy=productCopy.filter((item)=>category === item.category);
            productCopy=productCopy.filter((item)=>subCategory === item.subCategory);
            setRealted(productCopy.slice(0,5));
        }
    },[products])
  return (
    <div className='my-24'>
        <div className=' text-center text-3xl py-2'>
            <Title text1={'related'} text2={'products'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {
              related.map((item)=>{
                return <ProductItem key={item._id} data={item}/>
              })
           }
        </div>
    </div>
  )
}

export default RelatedProducts