import About from '../components/About';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home({ skills, contactInfo }) {
  return (
    <main>
      <Banner contactInfo={contactInfo} />
      <About />
      <Skills skills={skills} />
    </main>
  );
}

export const getStaticProps = async () => {
  const skills = [
    { name: 'nextjs', url: 'https://nextjs.org/' },
    { name: 'react', url: 'https://reactjs.org/' },
    { name: 'vue', url: 'https://vuejs.org/' },
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
  const contactInfo = [
    { name: 'github', url: 'https://github.com/iamsdas', icon: faGithub },
    { name: 'gitlab', url: 'https://gitlab.gnome.org/iamsdas', icon: faGitlab },
    {
      name: 'email',
      url: 'mailto:suryashankardas.2002@gmail.com',
      icon: faEnvelope,
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/iamsdas',
      icon: faLinkedinIn,
    },
    { name: 'twitter', url: 'https://twitter.com/_iamsdas', icon: faTwitter },
  ];

  return {
    props: {
      skills,
      contactInfo,
    },
  };
};
