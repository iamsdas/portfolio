import React from 'react';
import Image from 'next/image';

const Skills = () => {
  const skills = [
    { name: 'nextjs', url: 'https://nextjs.org/' },
    { name: 'react', url: 'https://reactjs.org/' },
    { name: 'tailwindcss', url: 'https://tailwindcss.com/' },
    { name: 'nodejs', url: 'https://nodejs.org/en/' },
    { name: 'graphql', url: 'https://graphql.org/' },
    { name: 'prisma', url: 'https://www.prisma.io/' },
    { name: 'bootstrap', url: 'https://getbootstrap.com/' },
    { name: 'ethereum', url: 'https://ethereum.org' },
    { name: 'socket.io', url: 'https://socket.io/' },
    { name: 'tensorflow', url: 'https://www.tensorflow.org/' },
    { name: 'flask', url: 'https://palletsprojects.com/p/flask/' },
    { name: 'flutter', url: 'https://palletsprojects.com/p/flask/' },
    { name: 'docker', url: 'https://www.docker.com/' },
  ];
  return (
    <section className='bg-gray-200 p-3 lg:px-10 pb-10 text-center space-y-4'>
      <h1 className='text-4xl pb-4 font-bold uppercase text-gray-700'>
        Skills and Tech Stack
      </h1>
      <span className='lg:text-2xl text-xl text-gray-900 font-para'>
        Currently using Next.js, Prisma and Tailwind for full stack web
        development and solidity for making decentralized apps on the ethereum
        network. Here is a list of some things that I have learnt in the past:
      </span>
      <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12'>
        {skills.map(({ name, url }, index) => (
          <div
            className='rounded-full p-4 md:p-5 w-24 sm:w-32 lg:w-36 h-24 sm:h-32
            lg:h-36 bg-gray-50 justify-center items-center flex shadow-xl
            filter hover:blur'
            key={index}>
            <a href={url} className='relative w-full h-full'>
              <Image
                src={`/images/${name}.svg`}
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
  );
};

export default Skills;
