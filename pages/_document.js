import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "./components/Header/Header";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <title>Nelly</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" />
      </Head>      
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
