import { CssBaseline, ThemeProvider } from '@mui/material';
import { lazy, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SEO from './components/SEO';
import { preloadAllImages } from './hooks/useImagePreloader';
import { useWebVitals } from './hooks/useWebVitals';
import muiTheme from './theme/muiTheme';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  // Monitor Web Vitals for performance tracking
  useWebVitals();
  
  // Preload all images on app mount
  useEffect(() => {
    preloadAllImages();
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <SEO />
        <Router>
          <div style={{ minHeight: '100vh' }}>
            <Navigation />
            {/* <Suspense fallback={<Loading />}> */}
              <Routes>
                <Route path='/' element={<HomePage />} />
              </Routes>
            {/* </Suspense> */}
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
