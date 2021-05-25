import React from 'react';
import Image from 'next/image';

const projects = () => {
  const projects = [
    {
      name: 'Collaborative Whiteboard',
      description: `This is a personal project in which I made a simple collborative
      drawing whiteboard webapp using Vue.js and Socket.io in which users can enter
      a unique room code and collaborate with each others.`,
      stack: 'Vue.js, Node.js, Socket.io',
      url: 'https://github.com/iamsdas/whiteboard',
      image: '/whiteboard.png',
    },
    {
      name: 'Text Compression',
      description: `This is a class project in which I made an interactive CLI utility
      for lossless text compression using an optimized version of the LZW algorithm in C++.`,
      stack: 'C++, LZW',
      url: 'https://github.com/iamsdas/Text-Compression',
      image: '/txtcomp.png',
    },
    {
      name: 'Xmeme',
      description: `This is a full stack project I built while I was initially
      exploring REST APIs. It has a Vue.js frontend which shows a list of memes
      served from a Flask backend with an option to add, delete and modify them.
      The backend also exposes it API documentation using Swagger-UI.`,
      stack: 'Flask, Vue.js, Bootstrap, Docker, Swagger-UI',
      url: 'https://github.com/iamsdas/xmeme-backend',
      image: '/xmeme.png',
    },
    {
      name: 'Gesture Calculator',
      description: `This is a personal project in which I built a calculator
      applicaiton using FLutter which takes in input via touch based gestures
      which are classified into standard standart numericals and arithmetic
      symbols using TensorFlow (CNNs)`,
      stack: 'Flutter, TensorFlow, TFlite',
      url: 'https://github.com/iamsdas/Flutter-Gesture-Calculator',
      image: '/calculator.png',
    },
  ];

  return (
    <section className='bg-gray-700 text-gray-50 px-4 sm:px-8 md:px-16'>
      <div className='pt-24 pb-8 font-para text-xl text-center'>
        This is a showcase of some of my projects. Click the images to get
        further details about it.
      </div>
      <div className='space-y-8 pb-8 flex flex-col justify-around items-center'>
        {projects.map(({ name, description, stack, image, url }, index) => (
          <div
            className='rounded-xl bg-gray-800 flex flex-col md:flex-row items-stretch w-full sm:w-3/5 md:w-5/6 lg:w-3/5 group'
            key={index}>
            <a
              href={url}
              className='w-full md:w-2/5 bg-gray-900 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl flex justify-center items-center'>
              <div className='filter group-hover:contrast-100 w-full contrast-75 hover:blur p-4'>
                <div className='aspect-w-1 aspect-h-1 relative flex-1'>
                  <Image
                    src={image}
                    layout='fill'
                    objectFit='scale-down'
                    unoptimized='true'
                  />
                </div>
              </div>
            </a>
            <div className='space-y-6 w-full md:w-3/5 p-4 self-center leading-snug'>
              <h1 className='text-2xl font-bold text-gray-100 group-hover:text-gray-50'>
                {name}
              </h1>
              <p className='text-lg font-para text-gray-100'>{description}</p>
              <p className='text-yellow-400 text-lg'>{stack}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default projects;
