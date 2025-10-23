import { Box } from '@mui/material';
import About from '../components/About';
import Biography from '../components/Biography';
import Achievements from '../components/Achievements';

const AboutPage = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <About />
      <Biography />
      <Achievements />
    </Box>
  );
};

export default AboutPage;
