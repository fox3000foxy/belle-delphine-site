import { Language as LanguageIcon } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

interface LanguageSelectorProps {
  color?: string;
}

const LanguageSelector = ({ color = 'inherit' }: LanguageSelectorProps) => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    handleClose();
  };

  // const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-label={t('language.select')}
        sx={{
          color,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}>
        <LanguageIcon />
        {/* <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {currentLanguage.flag}
        </Typography> */}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        {languages.map(language => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={i18n.language === language.code}
            sx={{
              minWidth: 150,
              gap: 1,
            }}>
            <Box component="span" sx={{ fontSize: '1.2rem' }}>
              {language.flag}
            </Box>
            <Typography>{language.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
