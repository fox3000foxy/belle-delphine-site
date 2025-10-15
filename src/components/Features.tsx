import { MenuBook as BookIcon, Favorite as HeartIcon, PhoneIphone as MobileIcon, People as PeopleIcon, School as SchoolIcon, Star as StarIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Container, Typography, Zoom } from '@mui/material';

const Features = () => {
  const features = [
    {
      icon: SchoolIcon,
      title: 'Interactive Learning',
      description: 'Modern learning methods with interactive exercises to master hiragana, katakana, and kanji.',
    },
    {
      icon: PeopleIcon,
      title: 'Active Community',
      description: 'Join a passionate community of Japanese learners to practice and progress together.',
    },
    {
      icon: BookIcon,
      title: 'Complete Resources',
      description: 'Access to a complete library of lessons, exercises, and educational materials adapted to your level.',
    },
    {
      icon: MobileIcon,
      title: 'Accessible Everywhere',
      description: 'Learn Japanese wherever you are with our responsive platform optimized for all devices.',
    },
    {
      icon: StarIcon,
      title: 'Progress Tracking',
      description: 'Personalized progress system to track your advancement and celebrate your achievements.',
    },
    {
      icon: HeartIcon,
      title: 'Shared Passion',
      description: 'A platform created by enthusiasts for enthusiasts of Japanese culture and language.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        backgroundColor: 'background.default',
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
            Extraordinary{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              Features
            </Typography>
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}>
            Discover all the features that make LLJT an exceptional learning platform for mastering Japanese.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Box key={index}>
                <Zoom in timeout={500 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 2,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        borderColor: 'primary.main',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
                      },
                    }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${feature.icon === SchoolIcon ? '#ef4444' : feature.icon === PeopleIcon ? '#f97316' : feature.icon === BookIcon ? '#f59e0b' : feature.icon === MobileIcon ? '#f97316' : feature.icon === StarIcon ? '#dc2626' : '#ec4899'} 0%, ${feature.icon === SchoolIcon ? '#dc2626' : feature.icon === PeopleIcon ? '#ea580c' : feature.icon === BookIcon ? '#d97706' : feature.icon === MobileIcon ? '#ea580c' : feature.icon === StarIcon ? '#b91c1c' : '#db2777'} 100%)`,
                          mb: 3,
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}>
                        <IconComponent sx={{ fontSize: '2rem', color: 'white' }} />
                      </Box>

                      <Typography
                        variant='h5'
                        component='h3'
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 2,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}>
                        {feature.title}
                      </Typography>

                      <Typography
                        variant='body1'
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;


