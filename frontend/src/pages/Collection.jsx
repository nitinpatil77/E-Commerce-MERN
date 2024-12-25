import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets.js';
import { ShopContext } from '../context/ShopContext.jsx';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';

function Collection() {
  const { products,search,showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState(products || []);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('');

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value) ? prev.filter((item) => item !== e.target.value) : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value) ? prev.filter((item) => item !== e.target.value) : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => subCategory.includes(item.subCategory));
    }
    if(search && showSearch){
      filtered=filtered.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilterProducts(filtered);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        setFilterProducts(sorted.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(sorted.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products,search,showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar filter area */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl uppercase flex items-center cursor-pointer gap-2"
        >
          filters
          <img
            src={assets.dropdown_icon}
            alt="dropdown_icon"
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          />
        </p>
        {/* Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="uppercase mb-3 text-sm font-medium">categories</p>
          <div className="flex flex-col gap-2 text-sm text-light text-gray-700">
            {['Men', 'Women', 'Kids'].map((item) => (
              <p key={item} className="flex gap-2">
                <input type="checkbox" value={item} onChange={toggleCategory} />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="uppercase mb-3 text-sm font-medium">type</p>
          <div className="flex flex-col gap-2 text-sm text-light text-gray-700">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
              <p key={item} className="flex gap-2">
                <input type="checkbox" value={item} onChange={toggleSubCategory} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Sidebar filter area end */}

      {/* Product sidebar */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collections" />
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* All Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem key={item._id} data={item} />
          ))}
        </div>
      </div>
      {/* Product sidebar end */}
    </div>
  );
}

export default Collection;
