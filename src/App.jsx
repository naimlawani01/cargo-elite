import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import EliteCargoLandingPage from './EliteCargoLandingPage';

// Google Analytics 4
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Remplacez par votre ID de mesure GA4

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    // Initialisation de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
      send_page_view: true
    });

    // Tracking des événements de navigation
    const handleRouteChange = () => {
      gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title
      });
    };

    // Écouter les changements de route
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/android-chrome-192x192.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/android-chrome-192x192.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#007d6f" />
        <meta name="msapplication-TileColor" content="#007d6f" />
        <meta name="theme-color" content="#007d6f" />

        {/* Google Analytics Script */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </script>

        <title>Elite Cargo - Fret, Logistique et Douane en Guinée & Afrique de l'Ouest</title>
        <meta name="description" content="Elite Cargo, société basée en Guinée, experte en fret aérien, maritime et terrestre, logistique, douane, déménagement international, import/export et transport en Afrique de l'Ouest." />
        <meta name="keywords" content="Elite Cargo, Guinée, Conakry, Afrique de l'Ouest, fret aérien, fret maritime, fret terrestre, logistique, transport, douane, déménagement international, import, export, transit, entreposage, livraison, partenaires, Air France, Ethiopian Airlines, Royal Air Maroc, Brussels Airlines, Asky, Bénin, Mali, Sénégal, Côte d'Ivoire, shipping, customs, moving, warehousing, supply chain, cargo, express, express shipping, international moving, Guinea logistics, Guinea freight, Africa logistics, Africa freight" />
      
        <meta name="geo.region" content="GN" />
        <meta name="geo.placename" content="Conakry, Guinea" />
        <meta name="geo.position" content="9.575416;-13.620247" />
        <meta name="ICBM" content="9.6412, -13.5784" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elite-cargo.net/" />
        <meta property="og:title" content="Elite Cargo - Fret, Logistique et Douane en Guinée & Afrique de l'Ouest" />
        <meta property="og:description" content="Société basée à Conakry, Guinée, spécialisée dans le fret, la logistique, la douane et le déménagement international en Afrique de l'Ouest." />
        <meta property="og:image" content="/images/elite.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://elite-cargo.net/" />
        <meta property="twitter:title" content="Elite Cargo - Fret, Logistique et Douane en Guinée & Afrique de l'Ouest" />
        <meta property="twitter:description" content="Société basée à Conakry, Guinée, spécialisée dans le fret, la logistique, la douane et le déménagement international en Afrique de l'Ouest." />
        <meta property="twitter:image" content="/images/elite.svg" />

        {/* Additional SEO tags */}
        <link rel="canonical" href="https://elite-cargo.net/" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <meta name="author" content="Elite Cargo" />
        {/* Structured Data for Business */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LogisticsCompany",
            "name": "Elite Cargo",
            "url": "https://elite-cargo.net/",
            "logo": "https://elite-cargo.net/images/elite.svg",
            "description": "Elite Cargo, société basée en Guinée, experte en fret aérien, maritime et terrestre, logistique, douane, déménagement international, import/export et transport en Afrique de l'Ouest.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Aéroport Ahmed Sékou Touré",
              "addressLocality": "Conakry",
              "addressCountry": "GN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "9.575416",
              "longitude": "-13.620247"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+224 622 65 25 11",
              "contactType": "customer service",
              "areaServed": ["GN", "ML", "SN", "BJ", "CI"],
              "availableLanguage": ["French", "English"]
            },
            "sameAs": [
              "https://www.facebook.com/elitecargoconakry"
            ]
          }
        `}</script>
      </Helmet>
      <EliteCargoLandingPage/>
    </HelmetProvider>
  );
}

export default App;