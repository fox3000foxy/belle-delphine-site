import { Box, Card, CardContent, Container, Typography, Fade } from '@mui/material';
import { Star as StarIcon, TrendingUp as TrendingIcon, VideoLibrary as VideoIcon, Celebration as CelebrationIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';

const Biography = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Started my journey as a makeup artist and cosplayer, sharing creative photos on Instagram. My unique aesthetic and attention to detail quickly caught the attention of anime and gaming communities worldwide.',
      icon: StarIcon,
      color: '#f59e0b',
    },
    {
      year: '2016-2017',
      title: 'Building the Brand',
      description: 'Expanded my presence across multiple platforms including Facebook and Twitter. Developed my signature pink aesthetic and began creating more elaborate cosplay content featuring characters from popular anime and video games.',
      icon: TrendingIcon,
      color: '#f97316',
    },
    {
      year: '2018',
      title: 'Viral Sensation',
      description: 'Achieved viral fame with creative and provocative cosplay content. My unique blend of gaming culture, anime aesthetics, and internet humor resonated with millions. Became one of the most searched personalities online.',
      icon: TrendingIcon,
      color: '#ef4444',
    },
    {
      year: '2019',
      title: 'YouTube & Gaming',
      description: 'Launched my YouTube channel featuring gaming content, vlogs, and creative videos. Reached millions of subscribers with content ranging from Minecraft to Among Us. Collaborated with other popular content creators and streamers.',
      icon: VideoIcon,
      color: '#ec4899',
    },
    {
      year: '2020',
      title: 'Entrepreneurial Ventures',
      description: 'Launched multiple successful business ventures including my own merchandise line and exclusive content platform. Demonstrated business acumen by creating innovative marketing campaigns that broke the internet multiple times.',
      icon: CelebrationIcon,
      color: '#a855f7',
    },
    {
      year: '2021-2022',
      title: 'Music & Creative Projects',
      description: 'Released original music videos and songs that garnered millions of views. Continued to push creative boundaries with elaborate photoshoots, music production, and artistic collaborations. Expanded into new creative territories beyond traditional content creation.',
      icon: VideoIcon,
      color: '#ec4899',
    },
    {
      year: '2023-Present',
      title: 'Legacy & Innovation',
      description: 'Continues to innovate in the digital content space with high-quality cosplay productions, gaming streams, and creative projects. Remains one of the most influential internet personalities, inspiring a new generation of content creators with her unique approach to online entertainment.',
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
            Career{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              Journey
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
            From humble beginnings to becoming one of the most recognized internet personalities and cosplayers in the world.
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
