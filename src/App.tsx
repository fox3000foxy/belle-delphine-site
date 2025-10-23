import { CssBaseline, ThemeProvider } from '@mui/material';
import About from './components/About';
import Achievements from './components/Achievements';
import Biography from './components/Biography';
import Contact from './components/Contact';
import Cosplay from './components/Cosplay';
import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import muiTheme from './theme/muiTheme';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh' }}>
        <Navigation />
        <section id='hero'>
          <Hero />
        </section>
        <section id='features'>
          <Features />
        </section>
        <section id='gallery'>
          <Gallery />
        </section>
        <section id='cosplay'>
          <Cosplay />
        </section>
        <section id='achievements'>
          <Achievements />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='biography'>
          <Biography />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
