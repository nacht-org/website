import type { NextPage } from "next";
import Head from "next/head";
import { AppShell, Stack, Title, Text, Paper, Button } from "@mantine/core";
import HeaderActions from "../components/header/HeaderActions";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Showcase from "../components/Showcase/Showcase";
import HeaderTitle from "../components/header/HeaderTitle";
import Link from "next/link";

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
      <Paper shadow="md" sx={{ position: "relative", zIndex: 2 }}>
        <AppShell
          padding="md"
          header={
            <Header>
              <HeaderTitle />
              <HeaderActions />
            </Header>
          }
        >
          <Stack align="center" className="mt-36 mb-8">
            <Title order={1} weight="normal" className="font-display text-7xl">
              Pronomia
            </Title>
            <Text
              className="max-w-5xl text-2xl md:text-3xl"
              align="center"
              span
              mb="lg"
            >
              Free and open source novel reader
            </Text>
            <Link href="/basic/getting-started" passHref>
              <Button size="xl">Getting started</Button>
            </Link>
            <Showcase />
          </Stack>
        </AppShell>
      </Paper>
      <Footer />
    </>
  );
};

export default Home;
