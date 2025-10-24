import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Cosplay', path: '#cosplay' },
    { name: 'Career', path: '#biography' },
    { name: 'News', path: '#news' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contact', path: '#contact' },
    { name: 'Merch', path: 'https://belledelphinemerch.com/fr' },
  ];

  const isExternalLink = (path: string) => {
    return path.startsWith('http://') || path.startsWith('https://');
  };

  const isAnchorLink = (path: string) => {
    return path.startsWith('#');
  };

  const isIndexLink = (path: string) => {
    return path === '/';
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (isAnchorLink(path)) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (isIndexLink(path)) {
      // To hero
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position='fixed'
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          borderBottom: trigger ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component='img'
              src={logo}
              alt='Belle Delphine Logo'
              sx={{
                height: 32,
                width: 32,
                mr: 1,
                transition: 'all 0.3s ease-in-out',
                filter: trigger ? 'none' : 'brightness(0) invert(1)',
                '&:hover': {
                  transform: 'scale(1.2)',
                  animation: 'none',
                },
              }}
            />
            <Typography
              variant='h5'
              component='div'
              sx={{
                fontWeight: 700,
                color: trigger ? 'text.primary' : 'white',
                transition: 'color 0.3s ease-in-out',
                fontFamily: '"Inter", sans-serif',
              }}>
              Belle Delphine
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {navItems.map(item => {
                const isExternal = isExternalLink(item.path);
                const isAnchor = isAnchorLink(item.path);

                return (
                  <Button
                    key={item.name}
                    component={isExternal || isAnchor ? 'a' : RouterLink}
                    {...(isExternal ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' } : isAnchor || isIndexLink(item.path) ? { href: item.path, onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleAnchorClick(e, item.path) } : { to: item.path })}
                    sx={{
                      color: trigger ? 'text.primary' : 'white',
                      fontWeight: 500,
                      textTransform: 'none',
                      position: 'relative',
                      transition: 'all 0.3s ease-in-out',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: '0',
                        height: '2px',
                        backgroundColor: 'primary.main',
                        transition: 'all 0.3s ease-in-out',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                        transform: 'translateY(-2px)',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}>
                    {item.name}
                  </Button>
                );
              })}
              <Button
                variant='contained'
                color='primary'
                component='a'
                href='https://www.youtube.com/channel/UCXvKUavCtDOlA8bT1i2tI3w'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: '25px',
                  fontWeight: 600,
                  textTransform: 'none',
                }}>
                Subscribe
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton
              onClick={() => setIsMenuOpen(true)}
              sx={{
                color: trigger ? 'text.primary' : 'white',
                transition: 'color 0.3s ease-in-out',
              }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            backgroundColor: 'background.paper',
          },
        }}>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
            }}>
            <Typography variant='h6' component='div' sx={{ fontWeight: 700 }}>
              Belle Delphine
            </Typography>
            <IconButton onClick={() => setIsMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map(item => {
              const isExternal = isExternalLink(item.path);
              const isAnchor = isAnchorLink(item.path);

              return (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton
                    component={isExternal || isAnchor ? 'a' : RouterLink}
                    {...(isExternal
                      ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
                      : isAnchor
                        ? {
                            href: item.path,
                            onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
                              handleAnchorClick(e, item.path);
                              setIsMenuOpen(false);
                            },
                          }
                        : { to: item.path })}
                    onClick={() => !isAnchor && setIsMenuOpen(false)}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: 'primary.50',
                      },
                    }}>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Button
            variant='contained'
            color='primary'
            fullWidth
            component='a'
            href='https://www.youtube.com/channel/UCXvKUavCtDOlA8bT1i2tI3w'
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              textTransform: 'none',
            }}>
            Subscribe
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
