import type { NextPage } from "next";
import Head from "next/head";
import { AppShell, Stack, Title, Text, Paper, Button } from "@mantine/core";
import HeaderActions from "../components/Layout/Header/HeaderActions/HeaderActions";
import Header from "../components/Layout/Header/Header";
import Showcase from "../components/Showcase/Showcase";
import HeaderTitle from "../components/Layout/Header/HeaderTitle/HeaderTitle";
import Link from "next/link";
import { SimpleFooter } from "../components/Layout/Footer";

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
              Nacht
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
      <SimpleFooter />
    </>
  );
};

export default Home;
