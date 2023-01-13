import "../src/index.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
