import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} - Fullstack Software Engineer`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Junior Sousa - Desenvolvedor Fullstack Web e Mobile, Front end, Back end e Pleno. Conheça mais sobre o jrsousadev."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="keywords"
        content="Desenvolvedor Fullstack web e mobile, Desenvolvedor Front end, Desenvolvedor Back end, Desenvolvedor Pleno, Junior Sousa, Desenvolvedor Junior Sousa, jrsousadev"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;
