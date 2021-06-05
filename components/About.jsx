import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='flex md:flex-row flex-col-reverse bg-trueGray-800 items-center justify-around'>
      <div className='py-12 text-amber-300 md:w-2/3 px-5 border-t-2 border-trueGray-700 border-dashed border-opacity-75'>
        <h1 className='text-4xl sm:text-5xl pb-5 font-bold uppercase text-left sm:text-center'>
          About Me
        </h1>
        <div className='leading-relaxed text-xl sm:text-2xl text-left sm:text-justify text-trueGray-300 font-para'>
          I am a college student majoring in computer science and am a tech
          enthusiast. I mostly have experience in full stack web development,
          app development using Flutter, and artificial intelligence using
          TensorFlow. I love exploring the latest technologies and am currently
          looking into blockchain. I am also an active open source contributor
          and am a part of my college's open source society.
        </div>
      </div>
    </section>
  );
};

export default About;
