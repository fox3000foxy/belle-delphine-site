import { KeyboardArrowDown as ArrowDownIcon, ArrowForward as ArrowIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import { Box, Button, Container, Fade, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
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
              {t('hero.title')}
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
              {t('hero.subtitle')}
            </Typography>

            <Box
              sx={{
                width: { xs: 180, md: 250 },
                height: { xs: 180, md: 250 },
                borderRadius: '50%',
                overflow: 'hidden',
                mx: 'auto',
                mb: 3,
                border: '6px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-10px',
                  left: '-10px',
                  right: '-10px',
                  bottom: '-10px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #ec4899, #f472b6, #ec4899)',
                  animation: 'spin 3s linear infinite',
                  zIndex: -1,
                  opacity: 0.5,
                },
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}>
              <Box
                component='img'
                src='/hero.png'
                alt='Belle Delphine Profile'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

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
              {t('hero.description')}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='center' alignItems='center' sx={{ mb: 6 }}>
              <Button
                component={RouterLink}
                to='/cosplay'
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
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '0',
                    height: '0',
                    borderRadius: '50%',
                    background: 'rgba(239, 68, 68, 0.2)',
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.6s, height 0.6s',
                  },
                  '&:hover::before': {
                    width: '300px',
                    height: '300px',
                  },
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.95)',
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
                  },
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                {t('hero.exploreCosplays')}
              </Button>

              <Button
                component={RouterLink}
                to='#gaming'
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
                {t('hero.gamingVideos')}
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
