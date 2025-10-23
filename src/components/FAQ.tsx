import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import { useState } from 'react';

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'How did you get started with cosplay?',
      answer: "I started cosplaying in 2015 as a makeup artist and gradually fell in love with bringing anime and gaming characters to life. What began as a hobby quickly turned into a passion as I discovered the incredible creative possibilities of costume design, photography, and character interpretation.",
      color: '#ef4444',
    },
    {
      question: 'What materials do you use for your costumes?',
      answer: "I use a variety of materials depending on the character and design. This includes EVA foam for armor pieces, thermoplastics like Worbla for detailed work, fabric ranging from spandex to brocade, 3D printed components, and various crafting materials. Each costume is carefully planned and handcrafted with attention to detail — and always with comfort, safety and event mobility in mind.",
      color: '#f59e0b',
    },
    {
      question: 'How long does it take to create a cosplay?',
      answer: "The time varies greatly depending on the complexity of the character. Simple cosplays might take a week or two, while elaborate costumes with armor, props, and intricate details can take several weeks to months. I also allocate additional time for fitting, transport logistics, and final photo-shoot touches.",
      color: '#ec4899',
    },
    {
      question: 'What games do you play and stream?',
      answer: "I enjoy a wide variety of games! My content includes popular titles like Minecraft, Among Us, League of Legends, Valorant, and various indie games. I love exploring new games and sharing those experiences with my community through streams and videos.",
      color: '#8b5cf6',
    },
    {
      question: 'Do you offer cosplay tutorials or workshops?',
      answer: "Yes! I regularly share behind-the-scenes content, makeup tutorials, and crafting tips on my YouTube channel and social media. I believe in helping others learn and grow in the cosplay community, so I try to make my techniques accessible to aspiring cosplayers.",
      color: '#06b6d4',
    },
    {
      question: 'How can I support your work?',
      answer: "There are many ways to support! You can follow me on social media, engage with my content (likes, comments, shares), check out my merchandise, or join my Patreon for exclusive content and behind-the-scenes access. Also, respecting the community (for example by crediting creators, respecting photos and autographs) goes a long way. Every bit of support helps me continue creating the content you love!",
      color: '#f97316',
    },
    {
      question: 'What inspires your creative projects?',
      answer: "My inspiration comes from many sources — anime, video games, internet culture, art, fashion, and my amazing community! I love taking characters and concepts I'm passionate about and putting my own creative spin on them. The feedback and enthusiasm from fans also drives me to keep innovating.",
      color: '#ef4444',
    },
    {
      question: 'Do you collaborate with other creators?',
      answer: "Absolutely! I love collaborating with photographers, fellow cosplayers, makeup artists, and other content creators. Collaborations bring fresh perspectives and allow us to create something truly special together. If you're interested in working together, feel free to reach out!",
      color: '#ec4899',
    },
    {
      question: 'Do I have to be a “perfect” crafter to start cosplaying?',
      answer: "Not at all — cosplay is about fun, expression and community. Starting simple, learning as you go, and focusing on enjoying the process are key. Perfection isn’t required! In fact, many guides for beginners emphasise that the hobby should reduce stress, not add it. ",
      color: '#22c55e',
    },
    {
      question: 'How do you choose which character to cosplay?',
      answer: "I select characters based on what I love — whether it’s the story, the design, or simply the creative challenge. Sometimes it’s about what techniques I’d like to try next. It’s important to understand your motivation, because it impacts how you approach the build and enjoy the result.",
      color: '#3b82f6',
    },
    {
      question: 'What about safety and comfort during a convention?',
      answer: "Safety and comfort always come first — especially when wearing costumes, props or armour for long hours. Check the event’s rules on props/weapons, ensure you can move, breathe, sit if needed, and transport everything properly. Many experienced cosplayers prioritise these factors above pure ‘accuracy’. ",
      color: '#10b981',
    },
    {
      question: 'Can I buy a cosplay instead of making it myself?',
      answer: "Yes — buying or commissioning a costume is a totally valid approach, especially if you’re pressed for time or resources. Just bear in mind that off-the-shelf costumes may require alterations, may lack some details, and might not be as durable as handcrafted ones. ",
      color: '#6366f1',
    },
    {
      question: 'What’s the difference between cosplay, costuming and crossplay?',
      answer: "The term ‘cosplay’ comes from combining ‘costume’ and ‘play’, adapted in Japan to describe dressing as fictional characters. ‘Costuming’ may be a broader term (including historical dress or other fandoms). ‘Crossplay’ refers to dressing as a character of a different gender than your own. It’s a vibrant part of the community. ",
      color: '#fbbf24',
    },
    {
      question: 'How do you handle props/weapons/armour in conventions?',
      answer: "Every event has its own prop/weapon/armour rules (size limits, materials, non-functionality, etc). Before you go, check the event website, plan your transport and how you’ll assemble/disassemble your gear, and test that it works and is safe to wear around crowds. ",
      color: '#8b5cf6',
    },
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
            Frequently Asked{' '}
            <Typography component='span' variant='inherit' sx={{ color: 'primary.main' }}>
              Questions
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
            Got questions? Here are answers to some of the most common questions about cosplay, content creation, and more!
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              sx={{
                mb: 2,
                borderRadius: '16px !important',
                overflow: 'hidden',
                border: '2px solid',
                borderColor: expanded === `panel${index + 1}` ? faq.color : 'transparent',
                boxShadow: expanded === `panel${index + 1}` ? `0 8px 25px ${faq.color}40` : '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:before': {
                  display: 'none',
                },
                '&:hover': {
                  borderColor: faq.color,
                  transform: 'translateY(-2px)',
                },
              }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: expanded === `panel${index + 1}` ? faq.color : 'text.secondary',
                      fontSize: '2rem',
                    }}
                  />
                }
                sx={{
                  background: expanded === `panel${index + 1}`
                    ? `linear-gradient(135deg, ${faq.color}15 0%, ${faq.color}05 100%)`
                    : 'white',
                  minHeight: 70,
                  '& .MuiAccordionSummary-content': {
                    my: 2,
                  },
                }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: 600,
                    color: expanded === `panel${index + 1}` ? faq.color : 'text.primary',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}>
                  {faq.question}
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
                  {faq.answer}
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
