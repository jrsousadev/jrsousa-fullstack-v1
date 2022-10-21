import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Especialista em desenvolvimento Web, entrego soluções em forma de códigos utilizando React, Node e outras tecnologias."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Fullstack, Front-end, Back-end, Desenvolvedor Web, Node, React, NextJS, Docker"
        />
        <meta name="author" content="Junior Sousa" />

        <link rel="shortcut icon" href="/images/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.png"
        />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
