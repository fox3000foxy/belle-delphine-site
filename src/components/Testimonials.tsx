import { FormatQuote as QuoteIcon } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Container, Fade, Rating, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Cosplay Enthusiast',
      avatar: '/assets/testimonial-1.jpg',
      rating: 5,
      quote: "Belle's attention to detail in her cosplays is absolutely incredible! Her work has inspired me to take my own cosplay creations to the next level. The creativity and passion she brings to every character is unmatched.",
      color: '#ef4444',
    },
    {
      name: 'Marcus Johnson',
      role: 'Gaming Content Creator',
      avatar: '/assets/testimonial-2.jpg',
      rating: 5,
      quote: "As a fellow content creator, I'm constantly amazed by Belle's innovative approach to gaming content. She knows how to engage her audience and create memorable moments that resonate with the gaming community.",
      color: '#f59e0b',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Photographer',
      avatar: '/assets/testimonial-3.jpg',
      rating: 5,
      quote: "Working with Belle has been an absolute dream! Her professionalism, creativity, and dedication to her craft make every photoshoot a masterpiece. She truly understands the art of visual storytelling.",
      color: '#ec4899',
    },
    {
      name: 'Alex Kim',
      role: 'Fan & Community Member',
      avatar: '/assets/testimonial-4.jpg',
      rating: 5,
      quote: "Belle has built one of the most welcoming and creative communities I've ever been part of. Her content brings joy to millions and inspires people to embrace their creativity and passion for geek culture.",
      color: '#8b5cf6',
    },
    {
      name: 'Jessica Taylor',
      role: 'Makeup Artist',
      avatar: '/assets/testimonial-5.jpg',
      rating: 5,
      quote: "The makeup artistry and character transformations Belle achieves are phenomenal! Her tutorials have helped countless aspiring cosplayers, including myself, learn new techniques and push creative boundaries.",
      color: '#06b6d4',
    },
    {
      name: 'David Park',
      role: 'Internet Culture Analyst',
      avatar: '/assets/testimonial-6.jpg',
      rating: 5,
      quote: "Belle is a true pioneer in internet culture and content creation. Her ability to create viral moments while maintaining authenticity is a testament to her understanding of digital media and her creative genius.",
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
            What People{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              Are Saying
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
            Hear from fans, collaborators, and fellow creators about their experiences and the impact of creative content.
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
