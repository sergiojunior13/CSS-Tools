import "../src/index.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { NextSeo } from "next-seo";
import { Inter } from "next/font/google";

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
