import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../contexts/ThemeContext";
import favicon from "../public/favicon.ico";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Especialista em desenvolvimento Web, entrego soluções em forma de códigos utilizando React, Node e outras tecnologias." />
          <meta name="keywords" content="HTML, CSS, JavaScript, Fullstack, Front-end, Back-end, Desenvolvedor Web" />
          <meta name="author" content="Junior Sousa" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
