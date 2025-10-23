import { ChatBubble as CommentIcon, Favorite as FavoriteIcon, Instagram as InstagramIcon, MusicNote as TikTokIcon, Twitter as TwitterIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Chip, Container, Fade, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const SocialHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialPosts = [
    {
      platform: 'Instagram',
      icon: InstagramIcon,
      color: '#E1306C',
      image: '/assets/cosplay-0.jpg',
      caption: 'New cosplay reveal! 💖 What character should I do next?',
      likes: '2.5M',
      comments: '45K',
      gradient: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FD1D1D 100%)',
    },
    {
      platform: 'YouTube',
      icon: YouTubeIcon,
      color: '#FF0000',
      image: '/assets/cosplay-1.jpg',
      caption: 'Behind the scenes of my latest photoshoot! Link in bio 🎬',
      likes: '1.8M',
      comments: '32K',
      gradient: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
    },
    {
      platform: 'TikTok',
      icon: TikTokIcon,
      color: '#000000',
      image: '/assets/cosplay-2.jpg',
      caption: 'Cosplay transformation time-lapse ✨ #cosplay #anime',
      likes: '3.2M',
      comments: '58K',
      gradient: 'linear-gradient(135deg, #00f2ea 0%, #ff0050 100%)',
    },
    {
      platform: 'Twitter',
      icon: TwitterIcon,
      color: '#1DA1F2',
      image: '/assets/cosplay-3.jpg',
      caption: 'Gaming stream tonight at 8PM! Who\'s ready? 🎮',
      likes: '890K',
      comments: '12K',
      gradient: 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)',
    },
    {
      platform: 'Instagram',
      icon: InstagramIcon,
      color: '#E1306C',
      image: '/assets/cosplay-4.jpg',
      caption: 'Throwback to one of my favorite shoots! 📸',
      likes: '2.1M',
      comments: '38K',
      gradient: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #FD1D1D 100%)',
    },
    {
      platform: 'YouTube',
      icon: YouTubeIcon,
      color: '#FF0000',
      image: '/assets/cosplay-5.jpg',
      caption: 'New makeup tutorial just dropped! Check it out 💄',
      likes: '1.5M',
      comments: '28K',
      gradient: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
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
            Social Media{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              Highlights
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
            Stay connected and catch the latest updates from across all social platforms!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}>
          {socialPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <Fade in={isVisible} timeout={800 + index * 150} key={index}>
                <Box>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: `0 20px 40px ${post.color}40`,
                      },
                      '&:hover .social-overlay': {
                        opacity: 1,
                      },
                    }}>
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component='img'
                        height='300'
                        image={post.image}
                        alt={post.caption}
                        sx={{
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        className='social-overlay'
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(180deg, transparent 0%, ${post.color}90 100%)`,
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                          pb: 2,
                        }}>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FavoriteIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>
                              {post.likes}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CommentIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>
                              {post.comments}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Chip
                        icon={<IconComponent sx={{ fontSize: '1rem', color: 'white !important' }} />}
                        label={post.platform}
                        sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          background: post.gradient,
                          color: 'white',
                          fontWeight: 600,
                          backdropFilter: 'blur(10px)',
                          '& .MuiChip-icon': {
                            color: 'white',
                          },
                        }}
                      />
                    </Box>
                    <CardContent sx={{ p: 2.5 }}>
                      <Typography
                        variant='body1'
                        sx={{
                          color: 'text.primary',
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                        }}>
                        {post.caption}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Fade>
            );
          })}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              mb: 3,
            }}>
            Follow me on social media for daily updates!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            {[
              { icon: InstagramIcon, color: '#E1306C', label: 'Instagram' },
              { icon: TwitterIcon, color: '#1DA1F2', label: 'Twitter' },
              { icon: YouTubeIcon, color: '#FF0000', label: 'YouTube' },
              { icon: TikTokIcon, color: '#000000', label: 'TikTok' },
            ].map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <IconButton
                  key={index}
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: social.color,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: social.color,
                      transform: 'scale(1.1) translateY(-4px)',
                      boxShadow: `0 8px 20px ${social.color}60`,
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}>
                  <SocialIcon sx={{ fontSize: '1.8rem' }} />
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialHighlights;
