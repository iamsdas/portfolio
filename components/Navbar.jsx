import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const stateChange = () => {
    setNavMenu(!navMenu);
  };
  const router = useRouter();

  return (
    <header className='fixed inset-x-0 text-neutral-200 z-50'>
      <div className='flex justify-between px-5 py-4 sm:py-1 items-center bg-neutral-900 bg-opacity-80 backdrop-blur-lg'>
        <div>
          <span className='text-3xl font-extrabold sm:text-4xl text-amber-300'>
            &lt;
          </span>
          <h1 className='text-5xl font-custom font-thin text-neutral-200 inline'>
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
            <a
              className={`underline-offset-2 hover:underline ${
                router.asPath === '/' ? ' text-amber-300' : ''
              }`}>
              Home
            </a>
          </Link>
          <Link href='/projects'>
            <a
              className={`underline-offset-2 hover:underline ${
                router.asPath === '/projects' ? ' text-amber-300' : ''
              }`}>
              Projects
            </a>
          </Link>
          <a
            href='https://iamsdas.hackerresume.io/UdoExO97vAseG80SqYOM'
            className='underline-offset-2 hover:underline'>
            Resume
          </a>
          {/* <Link href='#'>
            <a className='hover:text-yellow-600'>Blogs</a>
          </Link> */}
        </nav>
      </div>
      <nav
        className={`${
          navMenu
            ? 'flex bg-neutral-800 transition duration-1000 ease-in-out bg-opacity-75 backdrop-blur-lg'
            : 'hidden'
        } flex-col gap-3 px-5 pb-5 items-stretch md:hidden text-2xl text-center font-para uppercase`}>
        <Link href='/'>
          <a
            className={`border-neutral-700 border-t-2 pt-3 ${
              router.asPath === '/' ? 'text-yellow-600 border-yellow-500' : ''
            }`}
            onClick={stateChange}>
            Home
          </a>
        </Link>
        <Link href='/projects'>
          <a
            className={`border-neutral-700 border-t-2 pt-3 ${
              router.asPath === '/projects'
                ? 'text-yellow-600 border-yellow-500'
                : ''
            }`}
            onClick={stateChange}>
            Projects
          </a>
        </Link>
        <a
          href='https://iamsdas.hackerresume.io/UdoExO97vAseG80SqYOM'
          className='border-neutral-700 border-t-2 pt-3'>
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
