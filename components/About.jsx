import React from 'react';

const About = () => {
  return (
    <div className='py-8 flex md:flex-row flex-col-reverse bg-gray-300 items-center justify-around'>
      <div className='text-gray-700 md:w-1/2 px-5'>
        <h1 className='text-4xl pb-4 font-bold uppercase'>About Me</h1>
        <div className='leading-relaxed lg:text-2xl sm:text-xl text-md text-left text-gray-900'>
          I am a college student majoring in computer science and am a tech
          enthusiast. I mostly have experience in full-stack web development,
          app development using Flutter, and artificial intelligence using
          TensorFlow. I love exploring the latest technologies and am currently
          looking into blockchain technologies. I am also an open source
          contributor and am a part of my college's open source society.
        </div>
      </div>
      <div className='lg:w-2/5 md:w-1/2 sm:w-4/5 xs:w-full pb-10 px-3 md:pb-0'>
        <img src='/dev.svg' alt='dev' className='object-cover h-full w-full' />
      </div>
    </div>
  );
};

export default About;
