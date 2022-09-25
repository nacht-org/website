import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <Footer />
    </div>
  );
}

export default MyApp;
