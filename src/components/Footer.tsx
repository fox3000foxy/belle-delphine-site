import { Forum as DiscordIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
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
                {t('footer.official')}
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
              {t('footer.tagline')}
            </Typography>
            <Stack direction='row' spacing={2}>
              <IconButton
                component='a'
                href='https://www.facebook.com/tinkersmell'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit Belle Delphine on Facebook'
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
                aria-label='Visit Belle Delphine on Twitter'
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
                aria-label='Visit Belle Delphine on Instagram'
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
                aria-label='Visit Belle Delphine on YouTube'
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
              <IconButton
                component='a'
                href='https://discord.gg/FxFG7VzX9S'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Join Belle Delphine Discord server'
                sx={{
                  backgroundColor: '#5865F2',
                  color: 'background.paper',
                  '&:hover': {
                    backgroundColor: '#4752C4',
                    color: 'background.paper',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}>
                <DiscordIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant='h6'
              component='h4'
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'background.paper',
              }}>
              {t('footer.quickLinks')}
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
                {t('nav.home')}
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
                {t('nav.about')}
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
                {t('nav.gallery')}
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
                {t('nav.career')}
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
                {t('nav.contact')}
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant='h6'
              component='h4'
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'background.paper',
              }}>
              {t('nav.followMe')}
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
                {t('nav.cosplay')}
              </Link>
              <Link
                href='#news'
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
                {t('nav.news')}
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
                {t('nav.faq')}
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
                {t('nav.youtube')}
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
                {t('nav.merch')}
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
