import type { NextPage } from "next";
import Head from "next/head";
import { AppShell, Stack, Title, Text, Paper } from "@mantine/core";
import MainActions from "../components/header/MainActions";
import Header from "../components/header/Header";
import ShowcaseSection from "../components/showcases/ShowcaseSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Promonia</title>
        <meta
          name="description"
          content="Free and open source novel reader designed to be user friendly and
            customizable"
        />
      </Head>
      <Paper shadow="md">
        <AppShell
          padding="md"
          header={
            <Header>
              <MainActions />
            </Header>
          }
        >
          <Stack align="center" className="mt-32">
            <Title order={1} weight="normal" className="font-display text-7xl">
              Pronomia
            </Title>
            <Text
              className="max-w-5xl text-2xl md:text-3xl"
              align="center"
              span
            >
              Free and open source novel reader designed to be user friendly and
              customizable.
            </Text>
            <ShowcaseSection />
          </Stack>
        </AppShell>
      </Paper>
      <Footer />
      {/* <div className="h-full w-full">
        <div className="mb-32"></div>


        <ShowcaseSection />
      </div>
      <Footer responsive /> */}
    </>
  );
};

export default Home;
