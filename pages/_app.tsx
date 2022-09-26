import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import MainLayout from "../components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
