import React from 'react';
import Typical from 'react-typical';

const Banner = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center uppercase px-5 bg-gradient-to-b from-gray-800 via-gray-900 to-green-900 font-semibold text-gray-300 leading-snug'>
      <div>
        <div className='text-5xl lg:text-6xl'>Hey there !!</div>
        <div className='sm:text-6xl text-5xl lg:text-7xl'>
          I am{' '}
          <span className='font-extrabold text-green-200'>
            Suryashankar Das
          </span>
          ,
        </div>
        <div className='text-5xl font-bold lg:text-6xl'>Student Developer</div>
        <div className='sm:text-3xl text-2xl pt-8 font-semibold font-mono text-gray-50'>
          <Typical
            steps={[
              'Web Developer',
              1200,
              'Blockchain Enthusiast',
              1200,
              'Deep Learning Enthusiast',
              1200,
              'App Developer',
              1200,
            ]}
            loop={Infinity}></Typical>
        </div>
        <div className='flex justify-items-start gap-6 pt-12 text-4xl'>
          <a
            href='https://github.com/iamsdas'
            className='fab fa-github hover:text-gray-500'></a>
          <a
            href='https://gitlab.gnome.org/iamsdas'
            className='fab fa-gitlab hover:text-gray-500'></a>
          <a
            href='mailto:suryashankardas.2002@gmail.com'
            className='fa fa-envelope hover:text-gray-500'></a>
          <a
            href='https://linkedin.com/in/iamsdas'
            className='fab fa-linkedin-in hover:text-gray-500'></a>
          <a
            href='https://twitter.com/_iamsdas'
            className='fab fa-twitter hover:text-gray-500'></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
