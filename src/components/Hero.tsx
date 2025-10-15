import { KeyboardArrowDown as ArrowDownIcon, ArrowForward as ArrowIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import { Box, Button, Container, Fade, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.secondary.main} 100%)`,
      }}>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(40px)',
          },
          '&::before': {
            top: '25%',
            left: '25%',
            width: { xs: '200px', md: '300px' },
            height: { xs: '200px', md: '300px' },
            animation: 'float 6s ease-in-out infinite',
          },
          '&::after': {
            bottom: '25%',
            right: '25%',
            width: { xs: '150px', md: '250px' },
            height: { xs: '150px', md: '250px' },
            animation: 'float 4s ease-in-out infinite reverse',
          },
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0) scale(1)' },
            '50%': { transform: 'translateY(-20px) scale(1.1)' },
          },
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
        <Fade in={isVisible} timeout={1000}>
          <Box
            sx={{
              textAlign: 'center',
              px: { xs: 2, md: 6 },
              py: { xs: 4, md: 0 },
            }}>
            <Typography
              variant='h1'
              component='h1'
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                fontWeight: 800,
                color: 'white',
                mb: 2,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}>
              Belle Delphine
            </Typography>

            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                background: 'linear-gradient(45deg, #ec4899, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 3,
                lineHeight: 1.2,
              }}>
              Official Website
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                px: { xs: 1, sm: 0 },
              }}>
              Welcome to the official Belle Delphine website. Discover exclusive content, latest updates, and connect with the community.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='center' alignItems='center' sx={{ mb: 6 }}>
              <Button
                variant='contained'
                size='large'
                endIcon={<ArrowIcon />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  background: 'white',
                  color: theme.palette.primary.main,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.95)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}>
                Explore Content
              </Button>

              <Button
                variant='outlined'
                size='large'
                startIcon={<PlayIcon />}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 2,
                  '&:hover': {
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    borderColor: 'white',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}>
                Watch Videos
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 53%, 80%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '40%, 43%': { transform: 'translateX(-50%) translateY(-10px)' },
            '70%': { transform: 'translateX(-50%) translateY(-5px)' },
          },
        }}>
        <ArrowDownIcon
          sx={{
            fontSize: '2rem',
            color: 'white',
            opacity: 0.8,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;


