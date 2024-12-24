import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {
    const { products } = useContext(ShopContext);
    const [latestCollection, setLatestCollection] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            setLatestCollection(products.slice(0, 10));
        }
    }, [products]); 
    return (
        <div className='my-10'>
            <div className="text-center py-8 text-3xl">
                <Title text1="latest" text2="collection" />
                <p className='w-2/3 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>
            {/* Products rendering */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestCollection.map((item) => (
                    <ProductItem key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;
