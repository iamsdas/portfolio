import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='py-5 pt-10 flex md:flex-row flex-col-reverse bg-gray-200 items-center justify-around'>
      <div className='text-gray-700 md:w-1/2 px-5'>
        <h1 className='text-4xl pb-4 font-bold uppercase text-left sm:text-center'>
          About Me
        </h1>
        <div className='leading-relaxed text-xl text-left text-gray-900 font-para'>
          I am a college student majoring in computer science and am a tech
          enthusiast. I mostly have experience in full stack web development,
          app development using Flutter, and artificial intelligence using
          TensorFlow. I love exploring the latest technologies and am currently
          looking into blockchain. I am also an active open source contributor
          and am a part of my college's open source society.
        </div>
      </div>
      <div className='lg:w-2/5 md:w-1/2 sm:w-4/5 w-full pb-10 px-3 md:pb-0 '>
        <Image
          src='/images/misc/dev.svg'
          alt='about me'
          width={1408}
          height={916}
          unoptimized='true'
        />
      </div>
    </section>
  );
};

export default About;
