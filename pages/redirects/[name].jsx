import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';

const Redirects = ({ obj }) => {
  const router = useRouter();
  useEffect(() => {
    router.replace(obj.url);
  }, [obj, router]);

  return (
    <div className='h-screen flex justify-center items-center'>
      <Head>
        <meta property='og:image' content={obj?.img} />
        <meta property='og:url' content={obj?.url} />
        <meta property='og:title' content={obj?.title} />
        <meta property='og:description' content={obj?.desc} />
      </Head>
      redirecting...
    </div>
  );
};

const redirects = {
  'skill-verification-system': {
    url: 'https://learn.figment.io/tutorials/create-a-blockchain-skill-verification-system',
    img: 'https://figment.io/wp-content/uploads/2019/08/figment-networks-logo.jpg',
    title: 'Blockchain Based Skill Verification System Tutorial',
    desc: 'This is a tuorial on "Blockchain based skill verification system" co-written by me and one of my friends',
  },
};

export async function getStaticProps(context) {
  const obj = redirects[context.params.name];
  return {
    props: { obj },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(redirects).map((item) => ({
      params: { name: item },
    })),
    fallback: false,
  };
}

export default Redirects;
