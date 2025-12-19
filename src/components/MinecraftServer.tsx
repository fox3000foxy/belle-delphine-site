import { ContentCopy as CopyIcon, FiberManualRecord as DotIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, IconButton, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MinecraftServer = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const [copied, setCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [serverStatus, setServerStatus] = useState<'online' | 'offline'>('offline');
    const [statsData, setStatsData] = useState({
        players: '--',
        version: '--',
        uptime: '--',
        mode: '--',
    });
    const isServerOnline = serverStatus === 'online';

    const serverAddress = 'play.bellesmp.com';

    const fetchServerData = async (withSpinner = false) => {
        if (withSpinner) {
            setIsLoading(true);
        }

        try {
            const response = await fetch(`https://api.mcstatus.io/v2/status/java/play.bellesmp.com`);
            if (!response.ok) {
                throw new Error('Failed to fetch status');
            }

            const data = await response.json();
            const isOnline = Boolean(data?.online);

            setServerStatus(isOnline ? 'online' : 'offline');

            const playersOnline = data?.players?.online ?? 0;
            const playersMax = data?.players?.max ?? 0;
            const version = data?.version?.name_clean ?? data?.version?.name_raw ?? '--';
            const mode = data?.gamemode ?? data?.map ?? data?.motd?.clean?.[0] ?? '--';
            const uptimeRaw = data?.uptime ?? data?.duration;
            const uptime =
                typeof uptimeRaw === 'number'
                    ? `${Math.min(100, Math.max(0, Math.round(uptimeRaw)))}%`
                    : uptimeRaw || (isOnline ? '🟢' : '🔴');

            setStatsData({
                players: playersMax ? `${playersOnline}/${playersMax}` : `${playersOnline}`,
                version,
                uptime,
                mode,
            });
        } catch (_e) {
            console.log(_e);
            setServerStatus('offline');
            setStatsData((prev) => ({ ...prev, players: '--', uptime: '--' }));
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchServerData(true);
        const interval = setInterval(() => fetchServerData(), 30000);
        return () => clearInterval(interval);
    }, [serverAddress]);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(serverAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const serverStats = [
        { label: t('minecraft.players'), value: statsData.players },
        { label: t('minecraft.version'), value: statsData.version },
        // { label: t('minecraft.uptime'), value: statsData.uptime },
        // { label: t('minecraft.mode'), value: statsData.mode },
    ];

    //   const features = [
    //     { icon: '🎮', title: t('minecraft.feature1.title'), description: t('minecraft.feature1.desc') },
    //     { icon: '🎁', title: t('minecraft.feature2.title'), description: t('minecraft.feature2.desc') },
    //     { icon: '🏆', title: t('minecraft.feature3.title'), description: t('minecraft.feature3.desc') },
    //     { icon: '💎', title: t('minecraft.feature4.title'), description: t('minecraft.feature4.desc') },
    //     { icon: '🎨', title: t('minecraft.feature5.title'), description: t('minecraft.feature5.desc') },
    //     { icon: '🛡️', title: t('minecraft.feature6.title'), description: t('minecraft.feature6.desc') },
    //   ];

    return (
        <Box
            sx={{
                py: 12,
                background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark}15 100%)`,
                position: 'relative',
                overflow: 'hidden',
            }}>
            {/* Decorative Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                }}
            />

            <Container maxWidth='lg'>
                <Stack spacing={6}>
                    {/* Header */}
                    <Box textAlign='center'>
                        <Typography
                            variant='h2'
                            gutterBottom
                            sx={{
                                fontWeight: 800,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mb: 2,
                            }}>
                            {t('minecraft.title')}
                        </Typography>
                        <Typography variant='h5' color='text.secondary' sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
                            {t('minecraft.subtitle')}
                        </Typography>
                    </Box>

                    {/* Server Connection Card */}
                    <Card
                        elevation={8}
                        sx={{
                            background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}10 100%)`,
                            border: `2px solid ${theme.palette.primary.main}40`,
                            borderRadius: 4,
                            overflow: 'hidden',
                        }}>
                        <CardContent sx={{ p: 4 }}>
                            <Stack spacing={3}>
                                <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' gap={2}>
                                    <Box display='flex' alignItems='center' gap={2}>
                                        <Typography variant='h4' fontWeight='bold'>
                                            {t('minecraft.serverAddress')}
                                        </Typography>
                                        <Chip
                                            icon={<DotIcon sx={{ fontSize: 12, color: isServerOnline ? '#00ff00' : '#ff0000' }} />}
                                            label={t(`minecraft.${serverStatus}`)}
                                            color={isServerOnline ? 'success' : 'error'}
                                            size='small'
                                        />
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        p: 2,
                                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
                                        borderRadius: 2,
                                        border: `1px solid ${theme.palette.primary.main}30`,
                                    }}>
                                    <Typography
                                        variant='h5'
                                        sx={{
                                            fontFamily: 'monospace',
                                            color: theme.palette.primary.main,
                                            fontWeight: 'bold',
                                            flex: 1,
                                        }}>
                                        {serverAddress}
                                    </Typography>
                                    <Tooltip title={copied ? t('minecraft.copied') : t('minecraft.copy')} arrow>
                                        <IconButton onClick={handleCopyAddress} color='primary' size='large'>
                                            <CopyIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>

                                {/* Server Stats */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                    {serverStats.map((stat, index) => (
                                        <Box key={index} sx={{ flex: { xs: '1 1 calc(50% - 8px)', sm: '1 1 calc(25% - 12px)' }, minWidth: 0 }}>
                                            <Box textAlign='center' sx={{ p: 2 }}>
                                                <Typography variant='h4' color='primary' fontWeight='bold'>
                                                    {isLoading ? '...' : stat.value}
                                                </Typography>
                                                <Typography variant='body2' color='text.secondary'>
                                                    {stat.label}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>

                                <Button
                                    variant='contained'
                                    size='large'
                                    fullWidth
                                    disabled={!isLoading && !isServerOnline}
                                    sx={{
                                        py: 2,
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold',
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                        '&:hover': {
                                            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                                        },
                                    }}>
                                    {t('minecraft.joinNow')}
                                </Button>
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* Features Grid */}
                    {/* <Box>
            <Typography variant='h3' textAlign='center' fontWeight='bold' mb={4}>
              {t('minecraft.featuresTitle')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              {features.map((feature, index) => (
                <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', md: '1 1 calc(33.333% - 16px)' }, minWidth: 0 }}>
                  <Card
                    elevation={4}
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.dark}05 100%)`,
                      border: `1px solid ${theme.palette.primary.main}20`,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 24px ${theme.palette.primary.main}30`,
                        borderColor: theme.palette.primary.main,
                      },
                    }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box textAlign='center'>
                        <Typography variant='h2' mb={2}>
                          {feature.icon}
                        </Typography>
                        <Typography variant='h6' fontWeight='bold' mb={1}>
                          {feature.title}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {feature.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box> */}

                    {/* How to Join Section */}
                    <Card
                        elevation={4}
                        sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                            border: `1px solid ${theme.palette.primary.main}30`,
                            borderRadius: 3,
                        }}>
                        <CardContent sx={{ p: 4 }}>
                            <Typography variant='h4' fontWeight='bold' mb={3} textAlign='center'>
                                {t('minecraft.howToJoin')}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                                {[1, 2, 3, 4].map((step) => (
                                    <Box key={step} sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)', md: '1 1 calc(25% - 18px)' }, minWidth: 0 }}>
                                        <Box textAlign='center'>
                                            <Box
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: '50%',
                                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    margin: '0 auto 16px',
                                                }}>
                                                <Typography variant='h4' fontWeight='bold' color='white'>
                                                    {step}
                                                </Typography>
                                            </Box>
                                            <Typography variant='h6' fontWeight='bold' mb={1}>
                                                {t(`minecraft.step${step}.title`)}
                                            </Typography>
                                            <Typography variant='body2' color='text.secondary'>
                                                {t(`minecraft.step${step}.desc`)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Community Info */}
                    <Box textAlign='center' sx={{ mt: 4 }}>
                        <Typography variant='h5' fontWeight='bold' mb={2}>
                            {t('minecraft.community')}
                        </Typography>
                        <Typography variant='body1' color='text.secondary' maxWidth={700} mx='auto'>
                            {t('minecraft.communityDesc')}
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default MinecraftServer;
