import { People as PeopleIcon, Public as PublicIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grow, List, ListItem, ListItemIcon, ListItemText, Slide, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg,rgb(255, 213, 161) 0%,rgb(255, 213, 161) 100%)',
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}>
          <Box sx={{ mb: { xs: 4, lg: 0 } }}>
            <Slide direction='right' in={isVisible} timeout={800}>
              <Typography
                variant='h2'
                component='h2'
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}>
                {t('about.title')}{' '}
                <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
                  {t('about.name')}
                </Typography>
              </Typography>
            </Slide>

            <Slide direction='right' in={isVisible} timeout={1000}>
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                }}>
                {t('about.intro1')}
              </Typography>
            </Slide>

            <Slide direction='right' in={isVisible} timeout={1200}>
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                }}>
                {t('about.intro2')}
              </Typography>
            </Slide>

            <Slide direction='right' in={isVisible} timeout={1400}>
              <Typography
                variant='body1'
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                }}>
                {t('about.intro3')}
              </Typography>
            </Slide>

            <List sx={{ mb: 4 }}>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <TrendingUpIcon sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('about.feature1Title')}
                  secondary={t('about.feature1Desc')}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.9rem',
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <PeopleIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('about.feature2Title')}
                  secondary={t('about.feature2Desc')}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.9rem',
                  }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <PublicIcon sx={{ color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('about.feature3Title')}
                  secondary={t('about.feature3Desc')}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.9rem',
                  }}
                />
              </ListItem>
            </List>

            <Button
              variant='contained'
              size='large'
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
              Explore My Cosplays
            </Button>
          </Box>

          <Box>
            <Grow in timeout={1000}>
              <Box sx={{ position: 'relative' }}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)',
                    },
                  }}>
                  <Box
                    component='img'
                    src='/assets/about.jpg'
                    alt='Belle Delphine Cosplay'
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                  <CardContent sx={{ p: 3, background: 'rgba(255, 255, 255, 0.95)' }}>
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        mb: 1,
                      }}>
                      Creative Cosplayer
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        color: 'text.secondary',
                      }}>
                      Bringing characters to life with passion and creativity
                    </Typography>
                  </CardContent>
                </Card>

                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    right: -16,
                    width: 80,
                    height: 80,
                    backgroundColor: 'secondary.light',
                    borderRadius: '50%',
                    opacity: 0.6,
                    animation: 'bounce 2s infinite',
                    '@keyframes bounce': {
                      '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
                      '40%, 43%': { transform: 'translateY(-10px)' },
                      '70%': { transform: 'translateY(-5px)' },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -16,
                    left: -16,
                    width: 64,
                    height: 64,
                    backgroundColor: '#f97316',
                    borderRadius: '50%',
                    opacity: 0.6,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
                      '50%': { opacity: 0.8, transform: 'scale(1.05)' },
                    },
                  }}
                />
              </Box>
            </Grow>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
