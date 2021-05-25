import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <section className='fixed inset-x-0 bg-white bg-opacity-80 text-gray-900 z-50'>
      <div className='flex justify-between px-3 py-2 sm:py-1 items-center'>
        <div>
          <span className='text-4xl font-extrabold'>&lt;</span>
          <span className='text-5xl px-1 font-custom'>iamsdas</span>
          <span className='text-4xl font-extrabold'>&gt;</span>
        </div>
        <button
          className='md:hidden block p-1 focus:outline-none'
          onClick={() => {
            setNavMenu(!navMenu);
          }}>
          <FontAwesomeIcon
            icon={faBars}
            className='w-8 h-8'
            aria-hidden='true'
          />
        </button>
        <div className='md:flex gap-3 uppercase hidden text-xl font-medium'>
          <Link href='/'>
            <a className='hover:text-yellow-500'>Portfolio</a>
          </Link>
          <Link href='/projects'>
            <a className='hover:text-yellow-500'>Projects</a>
          </Link>
          {/* <Link href='#'>
            <a className='hover:text-yellow-500'>Blogs</a>
          </Link> */}
        </div>
      </div>
      <div
        className={`${
          navMenu ? 'flex' : 'hidden'
        } flex-col gap-5 px-5 uppercase pb-5 items-stretch md:hidden font-medium text-2xl text-center`}>
        <Link href='/'>
          <a className='hover:text-yellow-500'>Portfolio</a>
        </Link>
        <Link href='/projects'>
          <a className='hover:text-yellow-500'>Projects</a>
        </Link>
        {/* <Link href='#'>
          <a className='hover:text-yellow-500'>Blogs</a>
        </Link> */}
      </div>
    </section>
  );
};

export default Navbar;
