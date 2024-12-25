/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { assets } from '../assets/assets.js';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [visiable, setVisiable] = useState(false);
  const {setShowSearch}=useContext(ShopContext);
  return (
    <div className="flex justify-between items-center py-5">
      <Link to='/'>
        <img src={assets.logo} alt="nav-logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 font-medium">
        <Link to="/" className="flex flex-col items-center gap-1 uppercase">
          Home
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive('/') ? '' : 'hidden'
              }`}
          />
        </Link>
        <Link to="/collection" className="flex flex-col items-center gap-1 uppercase">
          Collection
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive('/collection') ? '' : 'hidden'
              }`}
          />
        </Link>
        <Link to="/about" className="flex flex-col items-center gap-1 uppercase">
          About
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive('/about') ? '' : 'hidden'
              }`}
          />
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 uppercase">
          Contact
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${isActive('/contact') ? '' : 'hidden'
              }`}
          />
        </Link>
      </ul>
      <div className="flex items-center sm:gap-6 gap-4">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="search-icon" className='w-5 cursor-pointer' />
        <div className="group relative">
          <img src={assets.profile_icon} alt="profile_icon" className='w-5 cursor-pointer' />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log Out</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="cart_icon" className='w-5 w-min-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>0</p>
        </Link>
        <img src={assets.menu_icon} alt="menu_icon" className='w-5 sm:hidden' onClick={() => setVisiable(true)} />
      </div>
      {/* Offcanvas menu for smaller device */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visiable ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600 font-medium">
          <div className="flex items-center gap-4 p-3 cursor-pointer" onClick={() => setVisiable(false)}>
            <img src={assets.dropdown_icon} alt="dropdown_icon" className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          <Link onClick={() => setVisiable(false)} className={`py-2 pl-6 uppercase border ${isActive('/') ? 'bg-black text-white' : ''}`} to='/'>Home</Link>
          <Link onClick={() => setVisiable(false)} className={`py-2 pl-6 uppercase border ${isActive('/collection') ? 'bg-black text-white' : ''}`} to='/collection'>Collection</Link>
          <Link onClick={() => setVisiable(false)} className={`py-2 pl-6 uppercase border ${isActive('/about') ? 'bg-black text-white' : ''}`} to='/about'>About</Link>
          <Link onClick={() => setVisiable(false)} className={`py-2 pl-6 uppercase border ${isActive('/contact') ? 'bg-black text-white' : ''}`} to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
