import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-us" className="bg-zinc-800">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G0MQ749VYG"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-G0MQ749VYG");`,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2683859460671203"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="AqCTozOdxdev-fEuiuWVG5DrgFKrUb3b_BIH5nbyYE8"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
