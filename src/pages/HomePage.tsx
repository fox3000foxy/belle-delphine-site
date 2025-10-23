import Achievements from '../components/Achievements';
import Biography from '../components/Biography';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <>
      <section id='hero'>
        <Hero />
      </section>
      <section id='features'>
        <Features />
      </section>
      <section id='gallery'>
        <Gallery />
      </section>
      {/* <section id='cosplay'>
        <Cosplay />
      </section> */}
      <section id='achievements'>
        <Achievements />
      </section>
      {/* <section id='about'>
        <About />
      </section> */}
      <section id='biography'>
        <Biography />
      </section>
    </>
  );
};

export default HomePage;
