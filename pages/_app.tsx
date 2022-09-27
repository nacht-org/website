import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Noto Sans, sans-serif",
      }}
    >
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </MantineProvider>
  );
}

export default MyApp;
