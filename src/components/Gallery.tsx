import ArrowIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button, Card, CardContent, Chip, Container, Fade, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    {
      title: t('gallery.items.animeCosplay.title'),
      category: t('gallery.items.animeCosplay.category'),
      description: t('gallery.items.animeCosplay.description'),
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      likes: t('gallery.items.animeCosplay.likes'),
    },
    {
      title: t('gallery.items.gamingSeries.title'),
      category: t('gallery.items.gamingSeries.category'),
      description: t('gallery.items.gamingSeries.description'),
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      likes: t('gallery.items.gamingSeries.likes'),
    },
    {
      title: t('gallery.items.fantasyMyth.title'),
      category: t('gallery.items.fantasyMyth.category'),
      description: t('gallery.items.fantasyMyth.description'),
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      likes: t('gallery.items.fantasyMyth.likes'),
    },
    {
      title: t('gallery.items.creativeShoots.title'),
      category: t('gallery.items.creativeShoots.category'),
      description: t('gallery.items.creativeShoots.description'),
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      likes: t('gallery.items.creativeShoots.likes'),
    },
    {
      title: t('gallery.items.behindScenes.title'),
      category: t('gallery.items.behindScenes.category'),
      description: t('gallery.items.behindScenes.description'),
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      likes: t('gallery.items.behindScenes.likes'),
    },
    {
      title: t('gallery.items.collaborationProjects.title'),
      category: t('gallery.items.collaborationProjects.category'),
      description: t('gallery.items.collaborationProjects.description'),
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      likes: t('gallery.items.collaborationProjects.likes'),
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #FED47C 0%, #FE9E73 100%)',
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
            {t('gallery.title')}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              mb: 4,
            }}>
            {t('gallery.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}>
          {portfolioItems.map((item, index) => (
            <Fade in={isVisible} timeout={800 + index * 200} key={index}>
              <Box>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px !important',
                    border: `3px solid ${item.color}`,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0 4px 12px ${item.color}40`,
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    '&, &::before, &::after': {
                      borderRadius: '24px !important',
                    },
                    '&:hover': {
                      transform: 'translateY(-15px) scale(1.03) rotate(2deg) translateZ(0)',
                      boxShadow: `0 25px 50px ${item.color}70`,
                      borderColor: item.color,
                      borderWidth: '3px',
                      borderRadius: '24px !important',
                    },
                    '&:hover .overlay': {
                      background: `linear-gradient(180deg, ${item.color}20 0%, ${item.color}95 100%)`,
                    },
                  }}>
                  <Box
                    component='img'
                    src={`/assets/portfolio-${index}.jpg`}
                    alt={item.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '21px',
                      transition: 'transform 0.3s ease-in-out',
                      '.MuiCard-root:hover &': {
                        transform: 'scale(1.1)',
                        borderRadius: '21px',
                      },
                    }}
                  />
                  <Box
                    className='overlay'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(180deg, ${item.color}40 0%, ${item.color}90 100%)`,
                      zIndex: 1,
                      borderRadius: '21px',
                      transition: 'all 0.5s ease-in-out',
                    }}
                  />
                  <CardContent
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 2,
                      minHeight: 350,
                    }}>
                    <Box>
                      <Chip
                        label={item.category}
                        size='small'
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          fontWeight: 600,
                          mb: 2,
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                      <Typography
                        variant='h5'
                        component='h3'
                        sx={{
                          fontWeight: 700,
                          color: 'white',
                          mb: 2,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          color: 'rgba(255, 255, 255, 0.95)',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          mb: 2,
                        }}>
                        {item.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 'auto',
                      }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FavoriteIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
                        <Typography
                          variant='body2'
                          sx={{
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '1rem',
                          }}>
                          {item.likes}
                        </Typography>
                      </Box>
                      <ArrowIcon
                        sx={{
                          color: 'white',
                          fontSize: '1.5rem',
                          transition: 'transform 0.3s ease-in-out',
                          '.MuiCard-root:hover &': {
                            transform: 'translateX(5px)',
                          },
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant='contained'
            size='large'
            endIcon={<ArrowIcon />}
            sx={{
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(239, 68, 68, 0.4)',
              },
              transition: 'all 0.3s ease-in-out',
            }}>
            {t('gallery.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
