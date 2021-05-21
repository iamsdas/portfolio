import React from 'react';
import Typical from 'react-typical';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
  return (
    <section
      className='h-screen bg-gradient-to-b from-gray-800 via-gray-900
    to-green-900 font-semibold uppercase text-gray-100'>
      <div
        className='h-full heropattern-circuitboard-green-900 flex
      flex-col justify-center items-center px-5'>
        <div>
          <div className='text-5xl lg:text-6xl'>Hey there !!</div>
          <div className='sm:text-6xl text-5xl lg:text-7xl'>
            I am{' '}
            <span className='font-extrabold text-green-300'>
              Suryashankar Das
            </span>
            ,
          </div>
          <div className='text-5xl font-bold lg:text-6xl'>
            Student Developer
          </div>
          <div className='sm:text-3xl text-2xl pt-8 font-semibold font-mono text-white'>
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
              loop={Infinity}
            />
          </div>
          <div className='flex justify-items-start gap-6 pt-12 text-4xl'>
            <a href='https://github.com/iamsdas' aria-label='github'>
              <FontAwesomeIcon
                icon={faGithub}
                className='hover:text-green-300'
                aria-hidden='true'
              />
            </a>
            <a href='https://gitlab.gnome.org/iamsdas' aria-label='gitlab'>
              <FontAwesomeIcon
                icon={faGitlab}
                className='hover:text-green-300'
                aria-hidden='true'
              />
            </a>
            <a href='mailto:suryashankardas.2002@gmail.com' aria-label='email'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='hover:text-green-300'
                aria-hidden='true'
              />
            </a>
            <a href='https://linkedin.com/in/iamsdas' aria-label='linkedin'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className='hover:text-green-300'
                aria-hidden='true'
              />
            </a>
            <a href='https://twitter.com/_iamsdas' aria-label='twitter'>
              <FontAwesomeIcon
                icon={faTwitter}
                className='hover:text-green-300'
                aria-hidden='true'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
