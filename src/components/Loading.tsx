import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #f472b6 100%)',
      }}>
      {/* Animated background blobs */}
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
        }}
      />

      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* Logo/Spinner */}
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CircularProgress
              size={80}
              thickness={3}
              sx={{
                color: 'white',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                },
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontWeight: 800,
              color: 'white',
              mb: 2,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
            {t('loading.title')}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant='h6'
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400,
            }}>
            {t('loading.message')}
          </Typography>

          {/* Loading bar */}
          <Box
            sx={{
              mt: 4,
              width: '100%',
              maxWidth: '400px',
              mx: 'auto',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}>
            <Box
              sx={{
                height: '100%',
                width: '60%',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                borderRadius: '2px',
                animation: 'loading 1.5s ease-in-out infinite',
                '@keyframes loading': {
                  '0%': {
                    transform: 'translateX(-100%)',
                  },
                  '100%': {
                    transform: 'translateX(250%)',
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Keyframes for float animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Loading;
