import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <section className='py-6 bg-gray-900 text-gray-50 flex justify-center items-center text-md sm:text-lg'>
      <div>
        Made with
        <FontAwesomeIcon
          icon={faHeart}
          className='w-6 h-6 text-red-700 inline py-1 mx-1 self-center'
          aria-hidden='true'
        />
        by Suryashankar Das &copy; 2021
      </div>
    </section>
  );
};

export default Footer;
