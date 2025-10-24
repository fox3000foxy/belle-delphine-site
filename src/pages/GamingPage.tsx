import { SportsEsports as GamingIcon, LiveTv as LiveIcon, VideoLibrary as VideoIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';

const GamingPage = () => {
  const gamingContent = [
    {
      icon: VideoIcon,
      title: 'Gaming Videos',
      description: 'Watch my latest gaming videos featuring popular games, walkthroughs, and funny moments.',
      color: '#ef4444',
    },
    {
      icon: LiveIcon,
      title: 'Live Streams',
      description: 'Join me live on Twitch and YouTube for interactive gaming sessions and community fun.',
      color: '#f97316',
    },
    {
      icon: GamingIcon,
      title: 'Game Reviews',
      description: 'Check out my honest reviews and first impressions of the latest and greatest games.',
      color: '#ec4899',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg,rgb(255, 161, 161) 0%,rgb(255, 161, 161) 100%)',
      }}>
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}>
          Gaming{' '}
          <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
            Content
          </Typography>
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
          }}>
          Dive into my gaming world! From epic gameplay sessions to hilarious moments and game reviews.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 8,
          }}>
          {gamingContent.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                sx={{
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 24px ${item.color}40`,
                  },
                }}>
                <Box
                  sx={{
                    height: 200,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                  <Box
                    component='img'
                    src={`/assets/wip.jpg`}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${item.color}60 0%, ${item.color}40 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <IconComponent sx={{ fontSize: '4rem', color: 'white', opacity: 0.9 }} />
                  </Box>
                </Box>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant='h5' sx={{ fontWeight: 600, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
            mb: 8,
          }}>
          {[1, 2, 3, 4].map(num => (
            <Card
              key={num}
              sx={{
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                },
              }}>
              <Box
                component='img'
                src={`/assets/wip.jpg`}
                alt={`Gaming Screenshot ${num}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 600, mb: 1 }}>
                  Epic Gaming Moment #{num}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Check out this amazing gameplay highlight from my recent stream!
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant='contained'
            size='large'
            component='a'
            href='https://www.youtube.com/channel/UCXvKUavCtDOlA8bT1i2tI3w'
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              px: 4,
              py: 2,
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1.1rem',
              textTransform: 'none',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(239, 68, 68, 0.4)',
              },
              transition: 'all 0.3s ease-in-out',
            }}>
            Watch on YouTube
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GamingPage;
