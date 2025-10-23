import { People as PeopleIcon, Public as PublicIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grow, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
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
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}>
              About{' '}
              <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
                Belle Delphine
              </Typography>
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}>
              Belle Delphine is a South African-born British creative cosplayer, passionate gamer, and internet personality known for her incredible costume designs, gaming content, and viral memes. She brings anime and gaming characters to life with stunning attention to detail and artistic vision.
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: 'text.secondary',
                mb: 3,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}>
              From elaborate cosplay photoshoots and gaming streams to hilarious meme content and creative collaborations, Belle creates entertaining content that celebrates geek culture and creativity. Her work spans multiple platforms including Instagram, YouTube, and TikTok, where she has amassed millions of followers.
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.125rem' },
              }}>
              Known for her innovative approach to content creation, Belle combines professional photography, handcrafted costumes, and creative makeup artistry to produce unique and memorable content. Her dedication to her craft and willingness to push creative boundaries has made her one of the most recognizable figures in internet culture.
            </Typography>

            <List sx={{ mb: 4 }}>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <TrendingUpIcon sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary='Professional Cosplay Artistry'
                  secondary='Handcrafted costumes with meticulous attention to detail'
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
                  primary='Active Gaming Community'
                  secondary='Engaging with fans through streams and gaming content'
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
                  primary='Internet Culture Pioneer'
                  secondary='Creating viral moments and innovative content formats'
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
                    p: 3,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)',
                    },
                  }}>
                  <CardContent sx={{ p: 0 }}>
                    <Card
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: 3,
                        p: 3,
                      }}>
                      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            backgroundColor: '#ef4444',
                            borderRadius: '50%',
                          }}
                        />
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            backgroundColor: '#eab308',
                            borderRadius: '50%',
                          }}
                        />
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            backgroundColor: '#22c55e',
                            borderRadius: '50%',
                          }}
                        />
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            height: 16,
                            backgroundColor: 'grey.200',
                            borderRadius: 1,
                            mb: 2,
                          }}
                        />
                        <Box
                          sx={{
                            height: 16,
                            backgroundColor: 'primary.100',
                            borderRadius: 1,
                            width: '75%',
                            mb: 2,
                          }}
                        />
                        <Box
                          sx={{
                            height: 16,
                            backgroundColor: 'secondary.100',
                            borderRadius: 1,
                            width: '50%',
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: 2,
                        }}>
                        <Box
                          sx={{
                            height: 80,
                            background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 600 }}>
                            ♡
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: 80,
                            background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Typography variant='h6' sx={{ color: 'secondary.dark', fontWeight: 600 }}>
                            ★
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
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
