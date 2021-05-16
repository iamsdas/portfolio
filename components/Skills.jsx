import React from 'react';
import Image from 'next/image';

const Skills = () => {
  const images = [
    'nextjs',
    'react',
    'tailwindcss',
    'tensorflow',
    'flask',
    'nodejs',
    'bootstrap',
    'ethereum',
    'socket.io',
    'docker',
  ];
  return (
    <section className='bg-gray-300 p-3 lg:px-10 pb-10 text-center'>
      <h1 className='text-4xl pb-4 font-bold uppercase text-gray-700 pb-8'>
        Skills and Tech Stack
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12'>
        {images.map((name, index) => (
          <div
            className='rounded-full p-4 md:p-5 w-24 sm:w-32 lg:w-36 h-24 sm:h-32 lg:h-36 bg-white justify-center items-center flex shadow-xl'
            key={index}>
            <span className='relative w-full h-full'>
              <Image
                src={`/images/${name}.svg`}
                alt={name}
                layout='fill'
                unoptimized='true'
                objectFit='scale-down'
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
