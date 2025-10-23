import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { TrendingUp as TrendingIcon, People as PeopleIcon, VideoLibrary as VideoIcon, EmojiEvents as TrophyIcon, Favorite as HeartIcon, Public as GlobalIcon } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: PeopleIcon,
      value: '10M+',
      label: 'Social Media Followers',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    },
    {
      icon: VideoIcon,
      value: '500M+',
      label: 'Video Views',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    {
      icon: HeartIcon,
      value: '100M+',
      label: 'Total Likes',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    },
    {
      icon: TrendingIcon,
      value: '50+',
      label: 'Viral Moments',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    },
    {
      icon: TrophyIcon,
      value: '200+',
      label: 'Cosplay Creations',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    },
    {
      icon: GlobalIcon,
      value: '150+',
      label: 'Countries Reached',
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    },
  ];

  const achievements = [
    {
      title: 'Internet Icon',
      description: 'Recognized as one of the most influential internet personalities and cosplayers globally.',
    },
    {
      title: 'Viral Sensation',
      description: 'Created multiple viral moments that dominated social media and internet culture.',
    },
    {
      title: 'Creative Pioneer',
      description: 'Pioneered unique content formats blending cosplay, gaming, and internet culture.',
    },
    {
      title: 'Community Builder',
      description: 'Built one of the most engaged and passionate fan communities in the cosplay world.',
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
            Achievements &{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              Impact
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
            Numbers and milestones that showcase the reach and influence of creative content.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 8,
          }}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Box key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: stat.gradient,
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 100}ms`,
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.05)',
                      boxShadow: `0 20px 40px ${stat.color}60`,
                    },
                  }}>
                  <CardContent
                    sx={{
                      p: { xs: 2, md: 3 },
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: { xs: 150, md: 180 },
                    }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        mb: 2,
                        backdropFilter: 'blur(10px)',
                      }}>
                      <IconComponent sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'white' }} />
                    </Box>
                    <Typography
                      variant='h3'
                      sx={{
                        fontWeight: 800,
                        color: 'white',
                        mb: 1,
                        fontSize: { xs: '1.75rem', md: '2.5rem' },
                      }}>
                      {stat.value}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontWeight: 600,
                        fontSize: { xs: '0.85rem', md: '1rem' },
                      }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
          }}>
          {achievements.map((achievement, index) => (
            <Box key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 2,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 3,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(239, 68, 68, 0.2)',
                    borderColor: 'secondary.main',
                  },
                }}>
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    variant='h5'
                    component='h3'
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}>
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}>
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Achievements;
