import { Email as EmailIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon, Send as SendIcon, Twitter as TwitterIcon } from '@mui/icons-material';
import { Alert, Box, Button, Card, CardContent, Container, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        backgroundColor: 'text.primary',
        color: 'background.paper',
      }}>
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontWeight: 700,
              color: 'background.paper',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}>
            Connect with{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              Belle
            </Typography>
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'background.default',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}>
            Connect with Belle for cosplay collaborations, gaming content, and creative projects. Join the community of fellow creators and fans!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '5fr 7fr' },
            gap: { xs: 4, md: 8 },
          }}>
          <Box sx={{ mb: { xs: 4, lg: 0 } }}>
            <Typography
              variant='h4'
              component='h3'
              sx={{
                fontWeight: 600,
                color: 'background.paper',
                mb: 4,
                fontSize: { xs: '1.75rem', md: '2rem' },
              }}>
              Contact Information
            </Typography>

            <List sx={{ mb: 4 }}>
              <ListItem sx={{ px: 0, py: 2 }}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <EmailIcon sx={{ color: 'background.paper' }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  sx={{ ml: 2 }}
                  primary={
                    <Typography variant='body2' sx={{ color: 'background.default', fontWeight: 500 }}>
                      Collaborations
                    </Typography>
                  }
                  secondary={
                    <Typography variant='body1' sx={{ color: 'background.paper', fontWeight: 500 }}>
                      collabs@belledelphine.com
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem sx={{ px: 0, py: 2 }}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'secondary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <InstagramIcon sx={{ color: 'background.paper' }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  sx={{ ml: 2 }}
                  primary={
                    <Typography variant='body2' sx={{ color: 'background.default', fontWeight: 500 }}>
                      Instagram
                    </Typography>
                  }
                  secondary={
                    <Typography variant='body1' sx={{ color: 'background.paper', fontWeight: 500 }}>
                      @belle.delphine
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem sx={{ px: 0, py: 2 }}>
                <ListItemIcon>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TwitterIcon sx={{ color: 'background.paper' }} />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  sx={{ ml: 2 }}
                  primary={
                    <Typography variant='body2' sx={{ color: 'background.default', fontWeight: 500 }}>
                      YouTube
                    </Typography>
                  }
                  secondary={
                    <Typography variant='body1' sx={{ color: 'background.paper', fontWeight: 500 }}>
                      Belle Delphine
                    </Typography>
                  }
                />
              </ListItem>
            </List>

            <Stack direction='row' spacing={2}>
              <IconButton
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'background.paper',
                  '&:hover': { backgroundColor: 'primary.dark' },
                }}>
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'background.paper',
                  '&:hover': { backgroundColor: 'secondary.dark' },
                }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'background.paper',
                  '&:hover': { backgroundColor: 'primary.dark' },
                }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'background.paper',
                  '&:hover': { backgroundColor: 'secondary.dark' },
                }}>
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box>
            <Card
              sx={{
                backgroundColor: 'secondary.main',
                borderRadius: 3,
              }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant='h4'
                  component='h3'
                  sx={{
                    fontWeight: 600,
                    color: 'background.paper',
                    mb: 3,
                    fontSize: { xs: '1.75rem', md: '2rem' },
                  }}>
                  Send us a message
                </Typography>

                {showSuccess && (
                  <Alert severity='success' sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Box component='form' onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: 3,
                    }}>
                    <TextField
                      fullWidth
                      label='Full Name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant='outlined'
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'grey.700',
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'grey.600',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey.400',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label='Email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant='outlined'
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'grey.700',
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'grey.600',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey.400',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label='Message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant='outlined'
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'grey.700',
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'grey.600',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'grey.400',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />

                    <Button
                      type='submit'
                      variant='contained'
                      size='large'
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        py: 2,
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}>
                      Send Message to Belle
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;


