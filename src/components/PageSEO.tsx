import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  structuredData?: object | object[];
}

const PageSEO = ({
  title,
  description,
  canonical,
  ogImage = "https://www.bespokeauto.design/lovable-uploads/ferrari-california-t.webp",
  structuredData,
}: PageSEOProps) => {
  const schemaArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bespoke Auto Design" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Miami" />
      <meta name="geo.position" content="25.838912;-80.33659" />
      <meta name="ICBM" content="25.838912, -80.33659" />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Structured Data */}
      {schemaArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default PageSEO;
