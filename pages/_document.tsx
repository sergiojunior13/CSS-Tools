import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-us" className="bg-zinc-800">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G0MQ749VYG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-G0MQ749VYG");`,
          }}
        />
        <script
          data-ad-client="ca-pub-2683859460671203"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <meta
          name="google-site-verification"
          content="AqCTozOdxdev-fEuiuWVG5DrgFKrUb3b_BIH5nbyYE8"
        />
        <meta
          name="description"
          content="Online CSS Tools to help you make your website"
        />
        <meta name="keywords" content="css tools, css, web tools" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
