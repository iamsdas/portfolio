import React from 'react';
import Typical from 'react-typical';

const Banner = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center uppercase px-5 bg-yellow-200 text-gray-700 font-semibold'>
      <div>
        <div className='text-5xl'>Hey there !!</div>
        <div className='sm:text-6xl text-5xl'>
          I am{' '}
          <span className='text-gray-900 font-extrabold'>Suryashankar Das</span>
          ,
        </div>
        <div className='text-5xl font-bold text-gray-800'>
          Student Developer
        </div>
        <div className='sm:text-3xl text-2xl pt-4 text-black font-semibold font-mono'>
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
        <div className='flex justify-items-start gap-6 pt-8 text-4xl'>
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
