import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    { key: 'gettingStarted', color: '#ef4444' },
    { key: 'materials', color: '#f59e0b' },
    { key: 'creationTime', color: '#ec4899' },
    { key: 'gaming', color: '#8b5cf6' },
    { key: 'tutorials', color: '#06b6d4' },
    { key: 'support', color: '#f97316' },
    { key: 'inspiration', color: '#ef4444' },
    { key: 'collaboration', color: '#ec4899' },
    { key: 'beginners', color: '#22c55e' },
    { key: 'characterChoice', color: '#3b82f6' },
    { key: 'safety', color: '#10b981' },
    { key: 'buyCosplay', color: '#6366f1' },
    { key: 'cosplayVsCostuming', color: '#fbbf24' },
    { key: 'props', color: '#8b5cf6' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
      }}>
      <Container maxWidth='md'>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}>
            {t('faq.title')}{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              {t('faq.titleHighlight')}
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
            {t('faq.subtitle')}
          </Typography>
        </Box>

        <Box>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              sx={{
                mb: 2,
                borderRadius: '16px !important',
                overflow: 'hidden',
                border: '2px solid',
                borderColor: expanded === `panel${index + 1}` ? item.color : 'transparent',
                boxShadow: expanded === `panel${index + 1}` ? `0 8px 25px ${item.color}40` : '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:before': {
                  display: 'none',
                },
                '&:hover': {
                  borderColor: item.color,
                  transform: 'translateY(-2px)',
                },
              }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: expanded === `panel${index + 1}` ? item.color : 'text.secondary',
                      fontSize: '2rem',
                    }}
                  />
                }
                sx={{
                  background: expanded === `panel${index + 1}` ? `linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%)` : 'white',
                  minHeight: 70,
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 600,
                    color: expanded === `panel${index + 1}` ? item.color : 'text.primary',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}>
                  {t(`faq.items.${item.key}.question`)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  pt: 2,
                  pb: 3,
                  px: 3,
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                }}>
                <Typography
                  variant='body1'
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}>
                  {t(`faq.items.${item.key}.answer`)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
