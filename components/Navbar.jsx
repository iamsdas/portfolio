import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <div className='fixed inset-x-0 bg-gray-50 bg-opacity-80 text-gray-900'>
      <div className='flex justify-between px-3 py-3 items-center'>
        <div>
          <span className='text-4xl font-extrabold'>&lt;</span>
          <span className='text-5xl px-1 font-custom'>iamsdas</span>
          <span className='text-4xl font-extrabold'>&gt;</span>
        </div>
        {/* <button
          className='md:hidden block text-3xl p-1 hover:text-gray-600 focus:outline-none'
          onClick={() => {
            setNavMenu(!navMenu);
          }}>
          <i className='fas fa-bars'></i>
        </button>
        <div className='md:flex gap-3 uppercase hidden text-xl font-medium'>
          <Link href='#'>
            <a className='hover:text-gray-500'>Portfolio</a>
          </Link>
          <Link href='#'>
            <a className='hover:text-gray-500'>Projects</a>
          </Link>
          <Link href='#'>
            <a className='hover:text-gray-500'>Blogs</a>
          </Link>
        </div> */}
      </div>
      <div
        className={`${
          navMenu ? 'flex' : 'hidden'
        } flex-col gap-5 px-5 uppercase pb-5 items-stretch md:hidden font-medium text-2xl text-center`}>
        <Link href='#'>
          <a className='hover:text-gray-500'>Portfolio</a>
        </Link>
        <Link href='#'>
          <a className='hover:text-gray-500'>Projects</a>
        </Link>
        <Link href='#'>
          <a className='hover:text-gray-500'>Blogs</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
