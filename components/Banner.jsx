import React from 'react';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = ({ contactInfo }) => (
  <section
    className='min-h-screen bg-neutral-900
      font-medium uppercase text-neutral-50 text-left'>
    <div className='min-h-screen heropattern-circuitboard-neutral-800 flex justify-center items-center px-6'>
      <div>
        <div className='text-5xl lg:text-6xl'>Hey there !!</div>
        <div className='sm:text-6xl text-5xl lg:text-7xl'>
          I am{' '}
          <h1 className='font-bold text-amber-300 inline'>Suryashankar Das</h1>,
        </div>
        <div className='text-5xl lg:text-6xl'>A Student Developer</div>
        <div className='text-3xl lg:text-4xl pt-8 font-thin font-mono text-neutral-300'>
          Interested in
          <Typical
            steps={[
              'Web Development',
              1200,
              'Blockchain',
              1200,
              'Deep Learning',
              1200,
            ]}
            loop={Infinity}
            wrapper='div'
          />
        </div>
        <div className='flex justify-start items-center gap-6 sm:gap-8pt-12 text-4xl py-6 text-amber-300'>
          {contactInfo.map(({ name, url, icon }, index) => (
            <a href={url} aria-label={name} key={index}>
              <FontAwesomeIcon
                icon={icon}
                className='hover:text-amber-500 w-9 h-9'
                aria-hidden='true'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
