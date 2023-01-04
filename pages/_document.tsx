import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,700&display=swap"
        rel="stylesheet"
      />

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
