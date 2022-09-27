import type { NextPage } from "next";
import Head from "next/head";
import { AppShell, Header, Title, Group, Button, Divider } from "@mantine/core";
import Link from "next/link";
import CodeLink from "../components/header/CodeLink";
import HeaderLink from "../components/header/HeaderLink";

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
      <AppShell
        padding="md"
        header={
          <Header height={60} p="md">
            <div className="flex items-center justify-between h-full">
              <Title
                order={1}
                className="font-display text-2xl"
                weight="normal"
              >
                Pronomia
              </Title>
              <Group spacing="md" align="center">
                <HeaderLink href="/guide/getting-started">
                  Getting Started
                </HeaderLink>
                <HeaderLink href="#null">Privacy Policy</HeaderLink>
                <Divider orientation="vertical" my="xs" />
                <CodeLink />
              </Group>
            </div>
          </Header>
        }
      >
        {""}
      </AppShell>
      {/* <div className="h-full w-full">
        <div className="mb-32"></div>


        <ShowcaseSection />
      </div>
      <Footer responsive /> */}
    </>
  );
};

export default Home;
