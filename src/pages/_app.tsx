import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
