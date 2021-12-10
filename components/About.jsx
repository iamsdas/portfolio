const About = () => {
  return (
    <div className='flex bg-neutral-800 items-center justify-around'>
      <section className='py-12 text-amber-300 md:w-2/3 px-5 border-t-2 border-neutral-700 border-dashed border-opacity-75'>
        <h2 className='text-4xl sm:text-5xl pb-5 font-bold uppercase text-left sm:text-center'>
          About Me
        </h2>
        <div className='leading-relaxed text-xl sm:text-2xl text-left sm:text-justify text-neutral-100 font-para'>
          I am a college student majoring in computer science and am a tech
          enthusiast. I am an aspiring software developer and have experience in
          Jamstack and MERN stack web development, app development using
          Flutter, and artificial intelligence using TensorFlow. I love
          exploring the latest technologies and am currently looking into
          blockchain. I am also an active open source contributor and am a part
          of my college&apos;s open source society.
        </div>
      </section>
    </div>
  );
};

export default About;
