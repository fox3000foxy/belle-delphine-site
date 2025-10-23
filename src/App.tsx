import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CosplayPage from './pages/CosplayPage';
import GamingPage from './pages/GamingPage';
import HomePage from './pages/HomePage';
import muiTheme from './theme/muiTheme';

function App() {
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
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
