import { Home as HomeIcon, Search as SearchIcon } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FEB3CE 0%, #FED47C 50%, #FE9E73 100%)',
        py: 8,
      }}>
      <Container maxWidth='md'>
        <Box
          sx={{
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '32px',
            p: { xs: 4, md: 8 },
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          }}>
          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '6rem', md: '10rem' },
              fontWeight: 900,
              background: 'linear-gradient(135deg, #FEB3CE 0%, #FE9E73 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              lineHeight: 1,
            }}>
            404
          </Typography>

          <Typography
            variant='h3'
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}>
            Oops! Page Not Found
          </Typography>

          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}>
            The page you're looking for seems to have disappeared into the void. Don't worry, even the best cosplayers lose their props sometimes! 🎭
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4,
            }}>
            <Button
              variant='contained'
              size='large'
              startIcon={<HomeIcon />}
              onClick={() => navigate('/')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #FEB3CE 0%, #FE9E73 100%)',
                boxShadow: '0 8px 25px rgba(254, 179, 206, 0.4)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 35px rgba(254, 179, 206, 0.5)',
                },
                transition: 'all 0.3s ease-in-out',
              }}>
              Go Home
            </Button>

            <Button
              variant='outlined'
              size='large'
              startIcon={<SearchIcon />}
              onClick={() => navigate(-1)}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                borderWidth: '2px',
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderWidth: '2px',
                  transform: 'translateY(-2px)',
                  backgroundColor: 'rgba(254, 179, 206, 0.1)',
                },
                transition: 'all 0.3s ease-in-out',
              }}>
              Go Back
            </Button>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                fontSize: '0.95rem',
              }}>
              Lost? Check out these popular pages:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                justifyContent: 'center',
                mt: 2,
              }}>
              {[
                { name: 'Cosplay', path: '/#cosplay' },
                { name: 'Gaming', path: '/#gaming' },
                { name: 'About', path: '/#about' },
                { name: 'Contact', path: '/#contact' },
              ].map(link => (
                <Button
                  key={link.name}
                  variant='text'
                  onClick={() => navigate(link.path)}
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(254, 179, 206, 0.1)',
                    },
                  }}>
                  {link.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
