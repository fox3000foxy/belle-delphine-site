import { Camera as CameraIcon, SportsEsports as GamingIcon, EmojiEmotions as MemeIcon, People as PeopleIcon, Shop as ShopIcon, VideoLibrary as VideoIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Container, Typography, Zoom } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: CameraIcon,
      title: t('features.cosplayGalleryTitle'),
      description: t('features.cosplayGalleryDesc'),
    },
    {
      icon: GamingIcon,
      title: t('features.gamingContentTitle'),
      description: t('features.gamingContentDesc'),
    },
    {
      icon: VideoIcon,
      title: t('features.youtubeTitle'),
      description: t('features.youtubeDesc'),
    },
    {
      icon: MemeIcon,
      title: t('features.memeCultureTitle'),
      description: t('features.memeCultureDesc'),
    },
    {
      icon: ShopIcon,
      title: t('features.merchandiseTitle'),
      description: t('features.merchandiseDesc'),
    },
    {
      icon: PeopleIcon,
      title: t('features.fanCommunityTitle'),
      description: t('features.fanCommunityDesc'),
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        backgroundColor: 'background.default',
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
            {t('features.title')}{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              {t('features.titleHighlight')}
            </Typography>
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}>
            {t('features.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Box key={index}>
                <Zoom in timeout={500 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 2,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        borderColor: 'primary.main',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
                      },
                    }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${feature.icon === VideoIcon ? '#ef4444' : feature.icon === PeopleIcon ? '#f97316' : feature.icon === CameraIcon ? '#f59e0b' : feature.icon === ShopIcon ? '#f97316' : feature.icon === GamingIcon ? '#dc2626' : '#ec4899'} 0%, ${feature.icon === VideoIcon ? '#dc2626' : feature.icon === PeopleIcon ? '#ea580c' : feature.icon === CameraIcon ? '#d97706' : feature.icon === ShopIcon ? '#ea580c' : feature.icon === GamingIcon ? '#b91c1c' : '#db2777'} 100%)`,
                          mb: 3,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          animation: 'pulse 2s ease-in-out infinite',
                          '@keyframes pulse': {
                            '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.7)' },
                            '50%': { boxShadow: '0 0 0 15px rgba(239, 68, 68, 0)' },
                          },
                          '&:hover': {
                            transform: 'scale(1.15) rotate(10deg)',
                            animation: 'none',
                          },
                        }}>
                        <IconComponent
                          sx={{
                            fontSize: '2rem',
                            color: 'white',
                            transition: 'transform 0.3s ease-in-out',
                            '.MuiCard-root:hover &': {
                              transform: 'scale(1.2) rotate(-10deg)',
                            },
                          }}
                        />
                      </Box>

                      <Typography
                        variant='h5'
                        component='h3'
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 2,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}>
                        {feature.title}
                      </Typography>

                      <Typography
                        variant='body1'
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
