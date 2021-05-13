import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields = [
    {
      loc: 'https://iamsdas.vercel.app', // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ];

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const Dummy = () => {};
export default Dummy;
