import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { Star as StarIcon, TrendingUp as TrendingIcon, VideoLibrary as VideoIcon, Celebration as CelebrationIcon } from '@mui/icons-material';

const Biography = () => {
  const milestones = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Started creating cosplay content and sharing creative photos on social media platforms.',
      icon: StarIcon,
      color: '#f59e0b',
    },
    {
      year: '2018',
      title: 'Rise to Fame',
      description: 'Gained massive popularity with viral cosplay photos and creative internet content, building a dedicated fanbase.',
      icon: TrendingIcon,
      color: '#ef4444',
    },
    {
      year: '2019',
      title: 'YouTube Channel',
      description: 'Launched YouTube channel featuring gaming content, vlogs, and creative videos, reaching millions of subscribers.',
      icon: VideoIcon,
      color: '#ec4899',
    },
    {
      year: '2020-Present',
      title: 'Creative Evolution',
      description: 'Continued to innovate with elaborate cosplay projects, gaming streams, and unique creative content that pushes boundaries.',
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
              <Box
                key={index}
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
                  }}>
                  <IconComponent sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: 'white' }} />
                </Box>

                <Box sx={{ flex: { xs: '1 1 0', md: '1 1 0' } }}>
                  <Card
                    sx={{
                      p: 2,
                      background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                      border: '2px solid',
                      borderColor: milestone.color,
                      borderRadius: 3,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 15px 30px ${milestone.color}40`,
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
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Biography;
