const About = () => {
  return (
    <div className='flex h-screen items-center justify-around bg-neutral-800'>
      <section className='py-12 text-amber-300 md:w-2/3 px-5'>
        <h2 className='text-4xl sm:text-5xl pb-5 font-bold uppercase text-left sm:text-center'>
          About Me
        </h2>
        <div className='leading-relaxed text-xl sm:text-2xl text-left sm:text-justify text-neutral-100 font-para'>
          I am a final-year college student majoring in computer science and an
          aspiring software developer with a keen interest in the web domain. I
          have participated in and won multiple hackathons. I am also an active
          open source contributor and am a part of my college&apos;s open source
          society. I love exploring the latest technologies and am currently
          looking into building performant WebAssembly modules using Rust, and
          scaleable microservices using NestJS.
        </div>
      </section>
    </div>
  );
};

export default About;
