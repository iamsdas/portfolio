import About from '../components/About';
import Banner from '../components/Banner';
import Head from 'next/head';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Banner />
      <About />
      <Skills />
    </div>
  );
}
