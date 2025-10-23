import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { preloadAllImages } from './hooks/useImagePreloader';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CosplayPage from './pages/CosplayPage';
import GamingPage from './pages/GamingPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import muiTheme from './theme/muiTheme';

function App() {
  // Preload all images on app mount
  useEffect(() => {
    preloadAllImages();
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <div style={{ minHeight: '100vh' }}>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cosplay' element={<CosplayPage />} />
            <Route path='/gaming' element={<GamingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
