import ArticleIcon from '@mui/icons-material/Article';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import ExternalIcon from '@mui/icons-material/OpenInNew';
import TrendingIcon from '@mui/icons-material/TrendingUp';
import { Box, Button, Card, CardContent, Chip, Container, Fade, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const { t } = useTranslation();

  const newsArticles = [
    {
      key: 'legacy',
      image: 'https://substackcdn.com/image/fetch/$s_!duAg!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa76d6feb-ab3c-49f5-85e7-3d6ae193c510_624x340.jpeg',
      url: 'https://amtenison.substack.com/p/belle-delphines-legacy-to-the-world',
      color: '#ffabab',
      trending: false,
      date: '2025-10-15'
    },
    {
      key: 'bathwaterInsider',
      image: 'https://i.insider.com/664b8d0220abc1efe8fba6c8?width=1000&format=jpeg&auto=webp',
      url: 'https://www.businessinsider.com/belle-delphine-jars-bathwater-sold-paypal-payment-2024-5',
      color: '#ef4444',
      trending: false,
      date: '2024-05-20'
    },
    {
      key: 'bathwaterNypost',
      image: 'https://nypost.com/wp-content/uploads/sites/2/2024/05/OFGO.jpg?resize=744,496&quality=75&strip=all',
      url: 'https://nypost.com/2024/05/22/belle-delphine-reveals-payday-battle-with-her-gamer-girl-bathwater/',
      color: '#f59e0b',
      trending: false,
      date: '2024-05-22'
    },
    {
      key: 'bathwaterVerge',
      image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25457382/GM5koG_W8AA4Wx8.jpeg?quality=90&strip=all&crop=0%2C16.5%2C100%2C53.333333333333&w=750',
      url: 'https://www.theverge.com/2024/5/20/24161207/belle-delphine-bathwater-paypal-adult-content',
      color: '#ec4899',
      trending: false,
      date: '2024-05-20'
    },
    {
      key: 'netWorthTiktok',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
      url: 'https://www.tiktoknetworth.com/post/belle-delphine-net-worth-2024-19-8-million-revealed',
      color: '#10b981',
      trending: true,
      date: '2024-03-18'
    },
    {
      key: 'podcastTheroux',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/91/c9/f2/91c9f2aa-7025-0297-9d6c-00132e4a7c94/mza_13219268811630324944.jpg/300x300bb.webp',
      url: 'https://podcasts.apple.com/ae/podcast/s2-ep5-belle-delphine-discusses-selling-her-bathwater/id1725833532?i=1000645931383',
      color: '#8b5cf6',
      trending: false,
      date: '2024-02-20'
    },
    {
      key: 'podcastScreenshot',
      image: 'https://screenshot-media.com/wp-content/uploads/2024/02/SCREENSHOT-media-Belle-Delphine-reveals-how-much-money-she-makes-on-OnlyFans-in-new-Louis-Theroux-podcast.jpg',
      url: 'https://screenshot-media.com/culture/internet-culture/belle-delphine-only-fans-earnings-louis-theroux/',
      color: '#3b82f6',
      trending: false,
      date: '2024-02-21'
    },
    {
      key: 'netWorthPenn',
      image: 'https://pennbookcenter.com/wp-content/uploads/2024/11/What-is-the-Net-Worth-Of-Belle-Delphine-in-2024.png',
      url: 'https://pennbookcenter.com/belle-delphine-net-worth/',
      color: '#f59e0b',
      trending: false,
      date: '2024-12-20'
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      }}>
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
            <ArticleIcon sx={{ fontSize: '2.5rem', color: 'primary.main' }} />
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}>
              {t('news.title')}{' '}
              <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
                {t('news.titleHighlight')}
              </Typography>
            </Typography>
          </Box>
          <Typography
            variant='h6'
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
            }}>
            {t('news.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}>
          {newsArticles.map((article, index) => (
            <Fade in={isVisible} timeout={800 + index * 150} key={index}>
              <Box>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid transparent',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 40px ${article.color}40`,
                      borderColor: article.color,
                    },
                  }}>
                  {article.trending && (
                    <Chip
                      icon={<TrendingIcon sx={{ fontSize: '1rem', color: 'white !important' }} />}
                      label={t('news.trendingLabel')}
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 2,
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                  )}
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '60%',
                      overflow: 'hidden',
                      backgroundColor: article.color + '20',
                    }}>
                    <Box
                      component='img'
                      src={article.image}
                      alt={t(`news.articles.${article.key}.title`)}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease-in-out',
                        '.MuiCard-root:hover &': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: `linear-gradient(to top, ${article.color}90, transparent)`,
                        p: 2,
                      }}>
                      <Chip
                        label={t(`news.articles.${article.key}.category`)}
                        size='small'
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: article.color,
                          fontWeight: 600,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Typography
                        variant='caption'
                        sx={{
                          color: 'text.secondary',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          fontSize: '0.75rem',
                        }}>
                        {t(`news.articles.${article.key}.source`)}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto' }}>
                        <CalendarIcon sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                        <Typography variant='caption' sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                          {formatDate(article.date)}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant='h6'
                      component='h3'
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        mb: 2,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        lineHeight: 1.3,
                      }}>
                      {t(`news.articles.${article.key}.title`)}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        mb: 3,
                        flexGrow: 1,
                      }}>
                      {t(`news.articles.${article.key}.excerpt`)}
                    </Typography>
                    <Button
                      component='a'
                      href={article.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      endIcon={<ExternalIcon />}
                      sx={{
                        alignSelf: 'flex-start',
                        color: article.color,
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: `${article.color}10`,
                        },
                      }}>
                      {t('news.readMore')}
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant='body1'
            sx={{
              color: 'text.secondary',
              mb: 2,
            }}>
            {t('news.ctaPrompt')}
          </Typography>
          <Button
            variant='contained'
            size='large'
            href='#contact'
            sx={{
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(239, 68, 68, 0.4)',
              },
              transition: 'all 0.3s ease-in-out',
            }}>
            {t('news.ctaButton')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default News;
