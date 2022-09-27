import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
