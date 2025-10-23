import { Article as ArticleIcon, CalendarToday as CalendarIcon, OpenInNew as ExternalIcon, TrendingUp as TrendingIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, Fade, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const News = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const newsArticles = [
        {
            title: "Belle Delphine's Legacy to the World",
            source: "AM Tenison - Substack",
            date: "2025-10-15", // Date estimée - à vérifier sur la page si possible
            category: "Opinion / Culture",
            image: "https://substackcdn.com/image/fetch/$s_!duAg!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa76d6feb-ab3c-49f5-85e7-3d6ae193c510_624x340.jpeg", // Image placeholder - Substack utilise généralement des images hébergées sur leur CDN
            excerpt: "A thoughtful reflection on Belle Delphine as more than just a controversial internet figure, highlighting her as an empowering force who exposed societal perversions while demonstrating exceptional entrepreneurial genius and remaining a genuine, kind person behind the persona.",
            url: "https://amtenison.substack.com/p/belle-delphines-legacy-to-the-world",
            trending: false,
            color: "#ffabab",
        },
        {
            title: "Belle Delphine earned over $90K selling jars of her bathwater in 2019. PayPal only released her money this week.",
            source: "Business Insider",
            date: "2024-05-20",
            category: "Business",
            image: "https://i.insider.com/664b8d0220abc1efe8fba6c8?width=1000&format=jpeg&auto=webp",
            excerpt: "In 2019 Belle Delphine went viral for selling 'Gamer Girl Bath Water' jars, allegedly earning over $90,000 — yet the funds were frozen by PayPal due to terms-of-service violations, until 2024 when they were finally released.",
            url: "https://www.businessinsider.com/belle-delphine-jars-bathwater-sold-paypal-payment-2024-5",
            color: "#ef4444",
        },
        {
            title: "OnlyFans star Belle Delphine reveals payday battle after selling $90K of her 'gamer girl bathwater' to fans",
            source: "New York Post",
            date: "2024-05-22",
            category: "Internet Culture",
            image: "https://nypost.com/wp-content/uploads/sites/2/2024/05/OFGO.jpg?resize=744,496&quality=75&strip=all",
            excerpt: "After her viral bathwater stunt in 2019, Belle reveals that PayPal froze her account and withheld $90K — she says it took her social media influence to get it back.",
            url: "https://nypost.com/2024/05/22/belle-delphine-reveals-payday-battle-with-her-gamer-girl-bathwater/",
            color: "#f59e0b",
        },
        {
            title: "'She sold her bathwater — PayPal took her profits'",
            source: "The Verge",
            date: "2024-05-20",
            category: "Business",
            image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25457382/GM5koG_W8AA4Wx8.jpeg?quality=90&strip=all&crop=0%2C16.5%2C100%2C53.333333333333&w=750",
            excerpt: "In a detailed report, The Verge covers how Belle's 2019 stunt led to $90K in profit which PayPal confiscated before returning the funds five years later.",
            url: "https://www.theverge.com/2024/5/20/24161207/belle-delphine-bathwater-paypal-adult-content",
            trending: false,
            color: "#ec4899",
        },
        {
            title: "Belle Delphine Net Worth 2024: $19.8 Million REVEALED",
            source: "TikTok Net Worth",
            date: "2024-03-18",
            category: "Business & Finance",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop", // Placeholder - site uses generic images
            excerpt: "Belle Delphine's strategic approach to content and monetization has earned her an estimated net worth of $19.8 million, with monthly OnlyFans earnings of $400,000, making her one of the platform's top earners and a trailblazer in digital entrepreneurship.",
            url: "https://www.tiktoknetworth.com/post/belle-delphine-net-worth-2024-19-8-million-revealed",
            trending: true,
            color: "#10b981",
        },
        {
            title: "Belle Delphine discusses selling her bathwater, dealing with stalkers and why she's called 'The Queen of the Simps'",
            source: "The Louis Theroux Podcast",
            date: "2024-02-20",
            category: "Podcast / Interview",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/91/c9/f2/91c9f2aa-7025-0297-9d6c-00132e4a7c94/mza_13219268811630324944.jpg/300x300bb.webp",
            excerpt: "In this rare in-depth podcast episode, Belle opens up to Louis Theroux about her career, the bathwater phenomenon, internet fame, making millions from her first adult video, and her surprisingly ambivalent feelings about her chosen career path.",
            url: "https://podcasts.apple.com/ae/podcast/s2-ep5-belle-delphine-discusses-selling-her-bathwater/id1725833532?i=1000645931383",
            trending: false,
            color: "#8b5cf6",
        },
        {
            title: "Belle Delphine reveals how much money she makes on OnlyFans in new Louis Theroux podcast",
            source: "Screenshot Media",
            date: "2024-02-21",
            category: "Digital Business",
            image: "https://screenshot-media.com/wp-content/uploads/2024/02/SCREENSHOT-media-Belle-Delphine-reveals-how-much-money-she-makes-on-OnlyFans-in-new-Louis-Theroux-podcast.jpg", // Placeholder
            excerpt: "The content creator revealed her first fully pornographic video alone made her £5 million, and she now earns around £1 million per month through OnlyFans, enabling her to purchase an eight-bedroom countryside estate.",
            url: "https://screenshot-media.com/culture/internet-culture/belle-delphine-only-fans-earnings-louis-theroux/",
            trending: false,
            color: "#3b82f6",
        },
        {
            title: "Belle Delphine Net Worth 2024: Financial Journey, Income, Achievements",
            source: "Penn Book Center",
            date: "2024-12-20",
            category: "Entrepreneurship",
            image: "https://pennbookcenter.com/wp-content/uploads/2024/11/What-is-the-Net-Worth-Of-Belle-Delphine-in-2024.png", // Placeholder
            excerpt: "Belle Delphine's journey showcases how bold creativity and strategic branding can lead to financial success, with an estimated $10 million net worth built through innovative monetization of her online persona and unconventional marketing strategies.",
            url: "https://pennbookcenter.com/belle-delphine-net-worth/",
            trending: false,
            color: "#f59e0b",
        }
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
                            News &{' '}
                            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
                                Press
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
                        Discover the latest news, press articles and media coverage.
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
                                            label='Trending'
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
                                            alt={article.title}
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
                                                label={article.category}
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
                                                {article.source}
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
                                            {article.title}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.6,
                                                mb: 3,
                                                flexGrow: 1,
                                            }}>
                                            {article.excerpt}
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
                                            Read Article
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
                        Want to cover Belle Delphine in your media?
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
                        Contact Us
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default News;
