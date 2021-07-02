import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const stateChange = () => {
    setTimeout(() => {
      setNavMenu(!navMenu);
    }, 200);
  };
  return (
    <header className='fixed inset-x-0 bg-trueGray-900 text-trueGray-200 z-50'>
      <div className='flex justify-between px-5 py-3 sm:py-1 items-center'>
        <div>
          <span className='text-3xl font-extrabold sm:text-4xl text-amber-300'>
            &lt;
          </span>
          <h1 className='text-5xl font-custom font-thin text-trueGray-200 inline'>
            iamsdas
          </h1>
          <span className='text-3xl font-extrabold sm:text-4xl text-amber-300'>
            &gt;
          </span>
        </div>
        <button
          className='md:hidden block focus:outline-none'
          aria-label='dropdown button'
          onClick={stateChange}>
          <FontAwesomeIcon
            icon={navMenu ? faTimes : faBars}
            className='w-9 h-9'
            size='lg'
            aria-hidden='true'
          />
        </button>
        <nav className='md:flex gap-3 hidden text-md font-semibold font-para uppercase'>
          <Link href='/'>
            <a className='hover:text-amber-300'>Home</a>
          </Link>
          <Link href='/projects'>
            <a className='hover:text-amber-300'>Projects</a>
          </Link>
          <a
            href='https://docs.google.com/document/d/1fhX1T7B31nYPVqpcSHxss57kU7FaPvz1r57CR7nIm2g/export?format=pdf'
            className='hover:text-amber-300'>
            Resume
          </a>
          {/* <Link href='#'>
            <a className='hover:text-yellow-600'>Blogs</a>
          </Link> */}
        </nav>
      </div>
      <nav
        className={`${
          navMenu ? 'flex' : 'hidden'
        } flex-col gap-3 px-5 pb-5 items-stretch md:hidden text-2xl text-center font-para`}>
        <Link href='/'>
          <a
            className='hover:text-yellow-600 border-trueGray-700 hover:border-yellow-500 border-t-2 pt-2'
            onClick={stateChange}>
            Home
          </a>
        </Link>
        <Link href='/projects'>
          <a
            className='hover:text-yellow-600 border-trueGray-700 hover:border-yellow-500 border-t-2 pt-2'
            onClick={stateChange}>
            Projects
          </a>
        </Link>
        <a
          href='https://docs.google.com/document/d/1fhX1T7B31nYPVqpcSHxss57kU7FaPvz1r57CR7nIm2g/export?format=pdf'
          className='hover:text-amber-300 border-trueGray-700 hover:border-yellow-500 border-t-2 pt-2'>
          Resume
        </a>
        {/* <Link href='#'>
          <a className='hover:text-yellow-600'>Blogs</a>
        </Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
