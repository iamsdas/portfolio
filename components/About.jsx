import React from 'react';

const About = () => {
  return (
    <div className='py-8 flex md:flex-row flex-col-reverse bg-gray-200 items-center'>
      <div className='text-green-900 md:w-1/2 px-5'>
        <div className='text-5xl pb-4 font-medium uppercase'>About Me</div>
        <div className='lg:text-3xl text-2xl md:leading-snug text-left text-gray-800'>
          I am a college student majoring in computer science and am a tech
          enthusiast. I mostly have experience in full-stack web development,
          app development using Flutter, and artificial intelligence using
          TensorFlow. I love exploring the latest technologies and am currently
          looking into blockchain technologies. I am also an open source
          contributor and am a part of my college's open source society.
        </div>
      </div>
      <div className='md:w-1/2 sm:w-4/5 xs:w-full pb-10 px-4 md:pb-0'>
        <img src='/dev.svg' alt='dev' className='object-cover h-full w-full' />
      </div>
    </div>
  );
};

export default About;
