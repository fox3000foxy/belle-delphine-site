import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Belle Delphine - Official Website',
  description = 'Official website of Belle Delphine - Creative cosplayer, content creator, and internet personality.',
  keywords = 'Belle Delphine, cosplay, content creator, OnlyFans, internet personality, gamer girl, anime cosplay',
  image = 'https://belle-delphine.com/icon.png',
  url = 'https://belle-delphine.com',
  type = 'website',
}: SEOProps) => {
  const { i18n } = useTranslation();

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={i18n.language === 'en' ? 'en_US' : i18n.language === 'fr' ? 'fr_FR' : i18n.language === 'es' ? 'es_ES' : 'ja_JP'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="en" href="https://belle-delphine.com/?lang=en" />
      <link rel="alternate" hrefLang="fr" href="https://belle-delphine.com/?lang=fr" />
      <link rel="alternate" hrefLang="es" href="https://belle-delphine.com/?lang=es" />
      <link rel="alternate" hrefLang="ja" href="https://belle-delphine.com/?lang=ja" />
      <link rel="alternate" hrefLang="x-default" href="https://belle-delphine.com/" />
    </Helmet>
  );
};

export default SEO;
