import "../src/index.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { NextSeo } from "next-seo";
import { Inter } from "next/font/google";
import Script from "next/script";

const title = "CSS Tools | FREE & Online CSS-3 Generator";
const description =
  "Do you need to create beautiful designs? use this website with free CSS tools to generate incredible styles!";
const url = process.env.NEXT_PUBLIC_URL;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
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
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          locale: "en_US",
          images: [
            {
              url: `${url}CSS Tools 1280x1280.png`,
              width: 1280,
              height: 1280,
              alt: "CSS Tools Thumbnail",
              type: "image/png",
            },
            {
              url: `${url}CSS Tools 1920x1080.png`,
              width: 1920,
              height: 1080,
              alt: "CSS Tools Thumbnail",
              type: "image/png",
            },
          ],
          siteName: title,
        }}
      />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
