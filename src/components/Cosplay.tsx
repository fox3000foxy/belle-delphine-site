import { Favorite as FavoriteIcon, Star as StarIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const Cosplay = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cosplays = [
    {
      title: 'Ahri - League of Legends',
      character: 'Ahri',
      game: 'League of Legends',
      likes: '2.5M',
      views: '15M',
      tags: ['Gaming', 'Fantasy', 'Popular'],
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    },
    {
      title: 'D.Va - Overwatch',
      character: 'D.Va',
      game: 'Overwatch',
      likes: '3.1M',
      views: '18M',
      tags: ['Gaming', 'Mecha', 'Iconic'],
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    {
      title: 'Harley Quinn - DC Comics',
      character: 'Harley Quinn',
      game: 'DC Comics',
      likes: '2.8M',
      views: '16M',
      tags: ['Comics', 'Villain', 'Classic'],
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    },
    {
      title: 'Vanelope - Darling in the Franxx',
      character: 'Vanelope',
      game: 'Anime',
      likes: '4.2M',
      views: '22M',
      tags: ['Anime', 'Waifu', 'Trending'],
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    },
    {
      title: 'Jinx - League of Legends',
      character: 'Jinx',
      game: 'League of Legends',
      likes: '3.5M',
      views: '20M',
      tags: ['Gaming', 'Chaos', 'Fan Favorite'],
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    },
    {
      title: 'Shiro - Soul of War',
      character: 'Shiro',
      game: 'SAO',
      likes: '2.9M',
      views: '17M',
      tags: ['Anime', 'Mecha', 'Critical'],
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    },
  ];

  return (
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
          Cosplay{' '}
          <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
            Collection
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
          Explore my favorite cosplay creations featuring characters from anime, games, and pop culture. Each costume is handcrafted with love and attention to detail!
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
        }}>
        {cosplays.map((cosplay, index) => (
          <Box key={index} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
            <Card
              sx={{
                height: '100%',
                background: cosplay.gradient,
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === index ? 'translateY(-15px) scale(1.03) rotate(-2deg)' : 'translateY(0) scale(1)',
                boxShadow: hoveredCard === index ? `0 25px 50px ${cosplay.color}70` : '0 4px 12px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'left 0.5s ease-in-out',
                  zIndex: 10,
                },
                '&:hover::before': {
                  left: '100%',
                },
              }}>
              <Box
                sx={{
                  height: 250,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                <Box
                  component='img'
                  src={`/assets/cosplay-${index}.jpg`}
                  alt={cosplay.character}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease-in-out',
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${cosplay.color}60 0%, ${cosplay.color}40 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <StarIcon
                    sx={{
                      fontSize: '4rem',
                      color: 'white',
                      opacity: 0.9,
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                      transform: hoveredCard === index ? 'scale(1.3) rotate(360deg)' : 'scale(1) rotate(0deg)',
                      transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    }}
                  />
                </Box>
              </Box>

              <CardContent sx={{ p: 3, backgroundColor: 'white' }}>
                <Typography
                  variant='h5'
                  component='h3'
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 1,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}>
                  {cosplay.character}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    fontWeight: 500,
                  }}>
                  {cosplay.game}
                </Typography>

                <Stack direction='row' spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                  {cosplay.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      label={tag}
                      size='small'
                      sx={{
                        backgroundColor: `${cosplay.color}20`,
                        color: cosplay.color,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Stack>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pt: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                  }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <FavoriteIcon sx={{ fontSize: '1rem', color: cosplay.color }} />
                    <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      {cosplay.likes}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <VisibilityIcon sx={{ fontSize: '1rem', color: cosplay.color }} />
                    <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      {cosplay.views}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography
          variant='h6'
          sx={{
            color: 'text.secondary',
            mb: 2,
          }}>
          Want to see more cosplays?
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
          }}>
          Follow me on Instagram and YouTube for behind-the-scenes content, tutorials, and new cosplay reveals!
        </Typography>
      </Box>
    </Container>
  );
};

export default Cosplay;
