import About from '../components/About';
import Banner from '../components/Banner';
import Skills from '../components/Skills';

export default function Home({ skills }) {
  return (
    <div>
      <Banner />
      <About />
      <Skills skills={skills} />
    </div>
  );
}

export const getStaticProps = async () => {
  const skills = [
    { name: 'nextjs', url: 'https://nextjs.org/' },
    { name: 'react', url: 'https://reactjs.org/' },
    { name: 'tailwindcss', url: 'https://tailwindcss.com/' },
    { name: 'nodejs', url: 'https://nodejs.org/en/' },
    { name: 'graphql', url: 'https://graphql.org/' },
    { name: 'prisma', url: 'https://www.prisma.io/' },
    { name: 'bootstrap', url: 'https://getbootstrap.com/' },
    { name: 'ethereum', url: 'https://ethereum.org' },
    { name: 'socket.io', url: 'https://socket.io/' },
    { name: 'tensorflow', url: 'https://www.tensorflow.org/' },
    { name: 'flask', url: 'https://palletsprojects.com/p/flask/' },
    { name: 'flutter', url: 'https://palletsprojects.com/p/flask/' },
    { name: 'docker', url: 'https://www.docker.com/' },
  ];
  return {
    props: {
      skills,
    },
  };
};
