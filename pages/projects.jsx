import React from 'react';
import Image from 'next/image';

const projects = () => {
  const projects = [
    {
      name: 'Collaborative Whiteboard',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, atque, quia dolore velit voluptatum exercitationem tenetur dignissimos voluptates hic odit ducimus quibusdam quasi doloremque sequi eveniet odio omnis ipsa eaque.',
      stack: 'Vue.js, Node.js, Socket.io',
      url: 'https://github.com/iamsdas/whiteboard',
      image: '/whiteboard.png',
    },
    {
      name: 'Text Compression',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, atque, quia dolore velit voluptatum exercitationem tenetur dignissimos voluptates hic odit ducimus quibusdam quasi doloremque sequi eveniet odio omnis ipsa eaque.',
      stack: 'C++, LZW',
      url: 'https://github.com/iamsdas/Text-Compression',
      image: '/txtcomp.png',
    },
    {
      name: 'Xmeme',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, atque, quia dolore velit voluptatum exercitationem tenetur dignissimos voluptates hic odit ducimus quibusdam quasi doloremque sequi eveniet odio omnis ipsa eaque.',
      stack: 'Flask, Vue.js, Bootstrap, Docker, Swagger-UI',
      url: 'https://github.com/iamsdas/xmeme-backend',
      image: '/xmeme.png',
    },
    {
      name: 'Gesture Calculator',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, atque, quia dolore velit voluptatum exercitationem tenetur dignissimos voluptates hic odit ducimus quibusdam quasi doloremque sequi eveniet odio omnis ipsa eaque.',
      stack: 'Flutter, TensorFlow, TFlite, CNN',
      url: 'https://github.com/iamsdas/Flutter-Gesture-Calculator',
      image: '/calculator.png',
    },
  ];

  return (
    <section className='bg-gray-700 text-gray-50 px-4 sm:px-8 md:px-16'>
      <div className='pt-24 pb-8 font-para text-xl text-center'>
        This is a showcase of some of my projects. For a complete list click
        <a
          href='https://github.com/iamsdas'
          className='text-yellow-400 pl-1 hover:text-yellow-500'>
          here
        </a>
        .<p>Click an image to check out the project</p>
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
            <div className='space-y-6 w-full md:w-3/5 p-4 self-center leading-nones'>
              <h1 className='text-3xl font-bold text-gray-100 group-hover:text-gray-50'>
                {name}
              </h1>
              <p className='text-xl text-gray-100'>{description}</p>
              <p className='text-yellow-400'>{stack}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default projects;
