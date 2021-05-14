import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps (ctx) {

  const fields = [
    {
      loc: 'https://iamsdas.vercel.app',
      lastmod: new Date().toISOString(),
    },
  ];

  return getServerSideSitemap(ctx, fields);
};

const Dummy = () => {};
export default Dummy;
