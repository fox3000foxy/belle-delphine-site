import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';
import { useState } from 'react';
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
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

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
              component="img"
              src={logo}
              alt="Belle Delphine Logo"
              sx={{
                height: 72,
                width: 72,
                mr: 1,
                transition: 'filter 0.3s ease-in-out',
                filter: trigger ? 'none' : 'brightness(0) invert(1)',
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
              {navItems.map(item => (
                <Button
                  key={item.name}
                  href={item.href}
                  sx={{
                    color: trigger ? 'text.primary' : 'white',
                    fontWeight: 500,
                    textTransform: 'none',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                  }}>
                  {item.name}
                </Button>
              ))}
              <Button
                variant='contained'
                color='primary'
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
            {navItems.map(item => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component='a'
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
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
            ))}
          </List>

          <Button
            variant='contained'
            color='primary'
            fullWidth
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


