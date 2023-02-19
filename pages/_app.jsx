import "../src/index.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { NextSeo } from "next-seo";

const title = "CSS Tools";
const description =
  "Do you need to create beautiful styles? use this website with free CSS tools to generate incredible CSS styles!";
const url = "https://tools-css.vercel.app/";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
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
    </>
  );
}
