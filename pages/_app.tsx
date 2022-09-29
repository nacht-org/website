import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import "../styles/globals.scss";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            fontFamily: "Noto Sans, sans-serif",
            defaultRadius: "sm",
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
