import React from 'react';
import Image from 'next/image';

const Skills = ({ skills }) => {
  return (
    <div className='bg-trueGray-800'>
      <section className='px-5 py-12 space-y-4 md:w-2/3 mx-auto border-t-2 border-trueGray-700 border-dashed border-opacity-75'>
        <h2 className='text-4xl sm:text-5xl pb-5 font-bold uppercase text-amber-300 text-left sm:text-center'>
          Skills and Tech Stack
        </h2>
        <div className='text-xl sm:text-2xl text-trueGray-100 font-para leading-relaxed text-left sm:text-justify pb-9'>
          Currently using Next.js, Prisma and Tailwind for full stack web
          development and solidity for making decentralized apps on the ethereum
          network. Here are some intersting things that I am currently learning
          or have learnt in the past:
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12'>
          {skills.map(({ name, url }, index) => (
            <div
              className='rounded-full p-4 md:p-5 w-24 sm:w-32 h-24 sm:h-32 bg-trueGray-100 justify-center items-center flex shadow-xl
              filter hover:blur'
              key={index}>
              <a href={url} className='relative w-full h-full'>
                <Image
                  src={`/images/skills/${name}.svg`}
                  title={name}
                  alt={name}
                  layout='fill'
                  unoptimized='true'
                  objectFit='scale-down'
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
