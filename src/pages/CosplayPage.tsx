import { Box, Container, Typography } from '@mui/material';
import Cosplay from '../components/Cosplay';
import Gallery from '../components/Gallery';

const CosplayPage = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg,rgb(161, 255, 203) 0%,rgb(161, 255, 203) 100%)',
      }}>
      <Cosplay />
      <Box sx={{ pt: 10 }}>
        <Container maxWidth='lg' sx={{ py: 8 }}>
          {/* <Typography
          variant='h2'
          component='h1'
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}>
          Cosplay{' '}
          <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
            Gallery
          </Typography>
        </Typography> */}
          <Typography
            variant='h6'
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
            }}>
            Explore my complete collection of cosplay creations, from anime characters to gaming icons. Each costume is handcrafted with passion and attention to detail.
          </Typography>
        </Container>
        <Gallery />
      </Box>
    </Box>
  );
};

export default CosplayPage;
