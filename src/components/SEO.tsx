import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Smartek",
  description = "Especializada em soluções tecnológicas, desenvolvimento de software, consultoria em TI, infraestrutura e redes, pesquisa e desenvolvimento em tecnologias avançadas.",
  keywords = "tecnologia, desenvolvimento, software, consultoria, inovação",
}) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Smartek" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/img/logo/imagotype-whitebg-w7h3.png" />
      <meta property="og:url" content="https://smartek.co.mz" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/assets/img/logo/imagotype-whitebg-w7h3.png" />

      <title>{title}</title>
      <link rel="canonical" href="https://smartek.co.mz" />

      <link rel="shortcut icon" href="/assets/img/logo/logo-nobg-w1h1.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/assets/img/logo/logo-nobg-w1h1.ico" />
    </Helmet>
  );
};

export default SEO;
