import About from '../components/About';
import Banner from '../components/Banner';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='description'
          content="Suryashankar Das's (iamsdas) personal portfolio webiste"
        />
        <meta
          name='google-site-verification'
          content='nhvnz7qvhSlwPw0IQj0cV7JXdsmpbiJ_nvbFz-N-a90'
        />
        <title>Portfolio | Suryashankar Das (iamsdas)</title>
      </Head>
      <Banner />
      <About />
    </div>
  );
}
