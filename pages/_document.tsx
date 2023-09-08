import { Html, Head, Main, NextScript } from "next/document";
import { inter, roboto_mono } from "./_app";

export default function Document() {
  return (
    <Html
      lang="en-us"
      className={`bg-zinc-800 ${inter.variable} ${roboto_mono.variable}`}
    >
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <GoogleAnalyticsAndAdSense />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

function GoogleAnalyticsAndAdSense() {
  const isProductionEnvironment = process.env.NODE_ENV === "production";
  if (!isProductionEnvironment) return <></>;

  return (
    <>
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
    </>
  );
}
