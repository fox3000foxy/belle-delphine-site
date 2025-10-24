import { Box, Container, Typography, Fade } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    followers: 0,
    cosplays: 0,
    videos: 0,
    countries: 0,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const finalValues = {
      followers: 10000000,
      cosplays: 200,
      videos: 500,
      countries: 150,
    };

    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          followers: Math.floor(finalValues.followers * progress),
          cosplays: Math.floor(finalValues.cosplays * progress),
          videos: Math.floor(finalValues.videos * progress),
          countries: Math.floor(finalValues.countries * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalValues);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString() + '+';
  };

  const stats = [
    {
      value: formatNumber(counts.followers),
      label: t('stats.followers'),
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    },
    {
      value: formatNumber(counts.cosplays),
      label: t('stats.cosplays'),
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    {
      value: formatNumber(counts.videos),
      label: t('stats.videos'),
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    },
    {
      value: formatNumber(counts.countries),
      label: t('stats.countries'),
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}>
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}>
          {stats.map((stat, index) => (
            <Fade in={isVisible} timeout={800 + index * 200} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: stat.gradient,
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.05)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: `0 20px 40px ${stat.color}40`,
                  },
                }}>
                <Typography
                  variant='h2'
                  sx={{
                    fontWeight: 800,
                    background: stat.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 1,
                    fontSize: { xs: '2rem', md: '3rem' },
                    lineHeight: 1.2,
                  }}>
                  {stat.value}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                  {stat.label}
                </Typography>
              </Box>
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;
