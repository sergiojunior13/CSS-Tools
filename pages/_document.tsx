import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br" className="bg-zinc-800">
      <Head>
        <title>CSS Tools</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G0MQ749VYG"
        ></script>
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
        ></script>
        <meta
          name="google-site-verification"
          content="egNiWxHl80GaQ2piJngZ_5MUByjcEv0ywkL_tkPyYt0"
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
