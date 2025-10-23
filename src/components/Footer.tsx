import { Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'text.primary',
        color: 'background.paper',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
            gap: { xs: 4, md: 6 },
            mb: 6,
          }}>
          <Box>
            <Typography
              variant='h4'
              component='h3'
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2rem' },
                color: 'background.paper',
              }}>
              Belle Delphine{' '}
              <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
                Official
              </Typography>
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: 'background.default',
                lineHeight: 1.6,
                mb: 3,
                maxWidth: '400px',
              }}>
              Creative cosplayer, passionate gamer, and content creator. Join the fun with cosplay tutorials, gaming streams, and meme culture!
            </Typography>
            <Stack direction='row' spacing={2}>
              <IconButton
                component='a'
                href='https://www.facebook.com/tinkersmell'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'background.paper',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}>
                <FacebookIcon />
              </IconButton>
              <IconButton
                component='a'
                href='https://twitter.com/bunnydelphine'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'background.paper',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                component='a'
                href='https://www.instagram.com/belle.delphine'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'background.paper',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}>
                <InstagramIcon />
              </IconButton>
              <IconButton
                component='a'
                href='https://www.youtube.com/channel/UCXvKUavCtDOlA8bT1i2tI3w'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'background.paper',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'background.paper',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}>
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant='h6'
              component='h4'
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'background.paper',
              }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link
                href='/'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                Home
              </Link>
              <Link
                href='#about'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                About
              </Link>
              <Link
                href='#gallery'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                Gallery
              </Link>
              <Link
                href='#biography'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                Career
              </Link>
              <Link
                href='#contact'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                Contact
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant='h6'
              component='h4'
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'background.paper',
              }}>
              Content
            </Typography>
            <Stack spacing={1}>
              <Link
                href='#cosplay'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                Cosplay
              </Link>
              <Link
                href='#faq'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                FAQ
              </Link>
              <Link
                component='a'
                href='https://www.youtube.com/channel/UCXvKUavCtDOlA8bT1i2tI3w'
                target='_blank'
                rel='noopener noreferrer'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                YouTube
              </Link>
              <Link
                component='a'
                href='https://belledelphinemerch.com/fr'
                target='_blank'
                rel='noopener noreferrer'
                underline='none'
                sx={{
                  color: 'background.default',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                  display: 'block',
                  py: 0.5,
                }}>
                Merch
              </Link>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'secondary.main', mb: 4 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'center' },
            gap: 2,
          }}>
          <Typography
            variant='body2'
            sx={{
              color: 'background.default',
              textAlign: { xs: 'center', md: 'left' },
            }}>
            © 2024 Belle Delphine - Cosplay & Gaming Content Creator. All rights reserved.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} alignItems='center'>
            {['Privacy Policy', 'Terms of Service', 'Community Guidelines'].map(item => (
              <Link
                key={item}
                href='#'
                underline='none'
                sx={{
                  color: 'background.default',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s ease-in-out',
                }}>
                {item}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
