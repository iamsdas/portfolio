import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        {/* Standard Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <title>Suryashankar Das (iamsdas)</title>
        {/* SEO Specific Tags */}
        <meta
          name='description'
          content='This is the personal portfolio website of Suryashankar Das (iamsdas)'
        />
        <meta
          name='google-site-verification'
          content='nhvnz7qvhSlwPw0IQj0cV7JXdsmpbiJ_nvbFz-N-a90'
        />
        {/* Fonts */}
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Sacramento&display=fallback'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
