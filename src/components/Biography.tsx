import { Box, Card, CardContent, Container, Typography, Fade } from '@mui/material';
import { Star as StarIcon, TrendingUp as TrendingIcon, VideoLibrary as VideoIcon, Celebration as CelebrationIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Biography = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: t('biography.milestones.2015.year'),
      title: t('biography.milestones.2015.title'),
      description: t('biography.milestones.2015.description'),
      icon: StarIcon,
      color: '#f59e0b',
    },
    {
      year: t('biography.milestones.2016_2017.year'),
      title: t('biography.milestones.2016_2017.title'),
      description: t('biography.milestones.2016_2017.description'),
      icon: TrendingIcon,
      color: '#f97316',
    },
    {
      year: t('biography.milestones.2018.year'),
      title: t('biography.milestones.2018.title'),
      description: t('biography.milestones.2018.description'),
      icon: TrendingIcon,
      color: '#ef4444',
    },
    {
      year: t('biography.milestones.2019.year'),
      title: t('biography.milestones.2019.title'),
      description: t('biography.milestones.2019.description'),
      icon: VideoIcon,
      color: '#ec4899',
    },
    {
      year: t('biography.milestones.2020.year'),
      title: t('biography.milestones.2020.title'),
      description: t('biography.milestones.2020.description'),
      icon: CelebrationIcon,
      color: '#a855f7',
    },
    {
      year: t('biography.milestones.2021_2022.year'),
      title: t('biography.milestones.2021_2022.title'),
      description: t('biography.milestones.2021_2022.description'),
      icon: VideoIcon,
      color: '#ec4899',
    },
    {
      year: t('biography.milestones.2023_present.year'),
      title: t('biography.milestones.2023_present.title'),
      description: t('biography.milestones.2023_present.description'),
      icon: CelebrationIcon,
      color: '#f97316',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      }}>
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}>
            {t('biography.title')}{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              {t('biography.titleHighlight')}
            </Typography>
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}>
            {t('biography.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(180deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)',
              borderRadius: '2px',
              display: { xs: 'block', sm: 'block' },
            },
          }}>
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            return (
              <Fade in={isVisible} timeout={1000 + index * 300} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                    gap: { xs: 2, md: 4 },
                    alignItems: 'center',
                    position: 'relative',
                  }}>
                  <Box
                    sx={{
                      flex: { xs: '0 0 auto', md: '1 1 0' },
                      textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                      display: { xs: 'none', md: 'block' },
                    }}>
                    <Typography
                      variant='h4'
                      sx={{
                        fontWeight: 700,
                        color: milestone.color,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                      }}>
                      {milestone.year}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 40, md: 80 },
                      height: { xs: 40, md: 80 },
                      borderRadius: '50%',
                      bgcolor: milestone.color,
                      boxShadow: `0 0 20px ${milestone.color}80`,
                      flexShrink: 0,
                      animation: 'bounce 2s ease-in-out infinite',
                      animationDelay: `${index * 0.2}s`,
                      '@keyframes bounce': {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-10px)' },
                      },
                    }}>
                    <IconComponent
                      sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        color: 'white',
                        animation: 'rotate 4s linear infinite',
                        '@keyframes rotate': {
                          '0%': { transform: 'rotate(0deg)' },
                          '100%': { transform: 'rotate(360deg)' },
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: { xs: '1 1 0', md: '1 1 0' } }}>
                    <Card
                      sx={{
                        p: 2,
                        background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                        border: '2px solid',
                        borderColor: milestone.color,
                        borderRadius: 3,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: `0 20px 40px ${milestone.color}50`,
                          borderColor: milestone.color,
                          background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                        },
                      }}>
                      <CardContent>
                        <Typography
                          variant='h4'
                          sx={{
                            fontWeight: 700,
                            color: milestone.color,
                            mb: 1,
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            display: { xs: 'block', md: 'none' },
                          }}>
                          {milestone.year}
                        </Typography>
                        <Typography
                          variant='h5'
                          component='h3'
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 1,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                          }}>
                          {milestone.title}
                        </Typography>
                        <Typography
                          variant='body1'
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                          }}>
                          {milestone.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Fade>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Biography;
