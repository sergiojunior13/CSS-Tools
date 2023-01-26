import "../src/index.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CSS Tools</title>
        <meta
          name="description"
          content="Free CSS Tools to help you to make your website."
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
