import { CssBaseline, ThemeProvider } from '@mui/material';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
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
        <section id='about'>
          <About />
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
