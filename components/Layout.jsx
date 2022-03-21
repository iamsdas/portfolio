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
        <meta name='theme-color' content='#171717' />
        <title>Suryashankar Das (iamsdas)</title>
        {/* SEO Specific Tags */}
        <meta
          name='description'
          content="suryashankar das (iamsdas)'s personal portfolio website"
        />
        <meta
          name='keywords'
          content='suryashankar das, iamsdas, Suryashankar Das'
        />
        <meta
          name='google-site-verification'
          content='_PJHG6L8Nv-7kUrFbYg_ThgZ26chiNe3g7NLFuNVHvw'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
