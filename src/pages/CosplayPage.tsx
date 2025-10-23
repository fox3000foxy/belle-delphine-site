import { Box, Container, Typography } from '@mui/material';
import Cosplay from '../components/Cosplay';
import Gallery from '../components/Gallery';

const CosplayPage = () => {
  return (
    <>
      <Gallery />
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          background: 'linear-gradient(135deg,rgb(161, 255, 203) 0%,rgb(161, 255, 203) 100%)',
        }}>
        <Cosplay />
        <Box sx={{ pt: 10 }}>
          <Container maxWidth='lg' sx={{ py: 8 }}>
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
        </Box>
      </Box>
    </>
  );
};

export default CosplayPage;
