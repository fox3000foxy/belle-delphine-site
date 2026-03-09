import QuoteIcon from '@mui/icons-material/FormatQuote';
import { Avatar, Box, Card, CardContent, Container, Fade, Rating, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: t('testimonials.entries.sarahChen.name'),
      role: t('testimonials.entries.sarahChen.role'),
      avatar: '/assets/testimonial-1.jpg',
      rating: 5,
      quote: t('testimonials.entries.sarahChen.quote'),
      color: '#ef4444',
    },
    {
      name: t('testimonials.entries.marcusJohnson.name'),
      role: t('testimonials.entries.marcusJohnson.role'),
      avatar: '/assets/testimonial-2.jpg',
      rating: 5,
      quote: t('testimonials.entries.marcusJohnson.quote'),
      color: '#f59e0b',
    },
    {
      name: t('testimonials.entries.emilyRodriguez.name'),
      role: t('testimonials.entries.emilyRodriguez.role'),
      avatar: '/assets/testimonial-3.jpg',
      rating: 5,
      quote: t('testimonials.entries.emilyRodriguez.quote'),
      color: '#ec4899',
    },
    {
      name: t('testimonials.entries.alexKim.name'),
      role: t('testimonials.entries.alexKim.role'),
      avatar: '/assets/testimonial-4.jpg',
      rating: 5,
      quote: t('testimonials.entries.alexKim.quote'),
      color: '#8b5cf6',
    },
    {
      name: t('testimonials.entries.jessicaTaylor.name'),
      role: t('testimonials.entries.jessicaTaylor.role'),
      avatar: '/assets/testimonial-5.jpg',
      rating: 5,
      quote: t('testimonials.entries.jessicaTaylor.quote'),
      color: '#06b6d4',
    },
    {
      name: t('testimonials.entries.davidPark.name'),
      role: t('testimonials.entries.davidPark.role'),
      avatar: '/assets/testimonial-6.jpg',
      rating: 5,
      quote: t('testimonials.entries.davidPark.quote'),
      color: '#f97316',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
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
            {t('testimonials.title')}{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              {t('testimonials.titleHighlight')}
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
            {t('testimonials.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}>
          {testimonials.map((testimonial, index) => (
            <Fade in={isVisible} timeout={800 + index * 150} key={index}>
              <Box>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                    border: '2px solid',
                    borderColor: testimonial.color,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 40px ${testimonial.color}50`,
                      borderColor: testimonial.color,
                    },
                  }}>
                  <QuoteIcon
                    sx={{
                      position: 'absolute',
                      top: -15,
                      right: 20,
                      fontSize: '3rem',
                      color: testimonial.color,
                      opacity: 0.3,
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          mr: 2,
                          border: `3px solid ${testimonial.color}`,
                          background: testimonial.color,
                        }}>
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant='h6'
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            fontSize: '1.1rem',
                          }}>
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant='body2'
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.9rem',
                          }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>

                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{
                        mb: 2,
                        '& .MuiRating-iconFilled': {
                          color: testimonial.color,
                        },
                      }}
                    />

                    <Typography
                      variant='body1'
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                        fontStyle: 'italic',
                      }}>
                      "{testimonial.quote}"
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
