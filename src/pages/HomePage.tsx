import About from '../components/About';
import Achievements from '../components/Achievements';
import Biography from '../components/Biography';
import Contact from '../components/Contact';
import Cosplay from '../components/Cosplay';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import MinecraftServer from '../components/MinecraftServer';
import News from '../components/News';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <section id='hero'>
        <Hero />
      </section>
      <section id='minecraft'>
        <MinecraftServer />
      </section>
      <section id='stats'>
        <Stats />
      </section>
      <section id='features'>
        <Features />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='gallery'>
        <Gallery />
      </section>
      <section id='cosplay'>
        <Cosplay />
      </section>
      {/* <section id='social'>
        <SocialHighlights />
      </section> */}
      <section id='biography'>
        <Biography />
      </section>
      <section id='achievements'>
        <Achievements />
      </section>
      <section id='testimonials'>
        <Testimonials />
      </section>
      <section id='news'>
        <News />
      </section>
      <section id='faq'>
        <FAQ />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
