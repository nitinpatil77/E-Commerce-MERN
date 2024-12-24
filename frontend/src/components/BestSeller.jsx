import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            const bestseller = products.filter((i) => i.bestseller);
            setBestSeller(bestseller.slice(0, 5)); 
        }
    }, [products]); 

    return (
        <div className='my-10'>
            <div className="text-center py-8 text-3xl">
                <Title text1="BEST" text2="SELLERS" />
                <p className='w-2/3 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item) => (
                    <ProductItem key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default BestSeller;
