import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schemaData?: object;
}

export const SEO = ({
  title = "Premium PPF, Ceramic Coating & Window Tint Services Miami | Bespoke Auto Design",
  description = "Professional XPEL paint protection film, ceramic coating & window tint installation in Miami. Authorized dealer with lifetime warranties. Protect your luxury vehicle investment today.",
  keywords = "PPF Miami, paint protection film Miami, ceramic coating Miami, window tint Miami, XPEL dealer Miami, car protection Miami, luxury car protection, automotive detailing Miami",
  canonical,
  ogImage = "/lovable-uploads/85878bee-0172-4227-b604-871ac11dfddf.png",
  schemaData
}: SEOProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bespoke Auto Design" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="business.business" />
      <meta property="og:site_name" content="Bespoke Auto Design" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="FL" />
      <meta name="geo.placename" content="Miami" />
      <meta name="geo.position" content="25.838912;-80.33659" />
      <meta name="ICBM" content="25.838912, -80.33659" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="7943 NW 64th St" />
      <meta name="business:contact_data:locality" content="Miami" />
      <meta name="business:contact_data:region" content="FL" />
      <meta name="business:contact_data:postal_code" content="33166" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-786-395-9172" />
      <meta name="business:contact_data:email" content="sales@bespokeauto.design" />
      
      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};