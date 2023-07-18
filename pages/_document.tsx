import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-us" className="bg-zinc-800">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="AqCTozOdxdev-fEuiuWVG5DrgFKrUb3b_BIH5nbyYE8"
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
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2683859460671203"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
