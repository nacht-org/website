import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";

import {
  guideSlugs,
  GuideData,
  slugsToPath,
  guideData,
  GuideHeading,
  guideHeadings,
} from "../../lib/guide";
import { mdBody } from "../../lib/markdown";
import { useRouter } from "next/router";
import Header from "../../components/header/Header";
import GuideContent from "../../components/guide/GuideContent";
import {
  AppShell,
  Burger,
  Group,
  MediaQuery,
  Navbar,
  NavLink,
  Paper,
  Stack,
} from "@mantine/core";
import HeaderActions from "../../components/header/HeaderActions";
import Link from "next/link";
import { routePath } from "../../lib/route";
import Footer from "../../components/Footer";
import { useState } from "react";
import HeaderTitle from "../../components/header/HeaderTitle";

interface Props {
  guide: GuideData;
  markdown: string;
  headings: GuideHeading[];
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const Guide: NextPage<Props> = ({ guide, markdown, headings }) => {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Guide | {guide.title}</title>
        <meta name="description" content={guide.description} />
      </Head>
      <AppShell
        padding={0}
        header={
          <Header>
            <Group align="center" spacing={0}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  mr="xl"
                />
              </MediaQuery>
              <HeaderTitle />
            </Group>
            <HeaderActions />
          </Header>
        }
        navbarOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            width={{ sm: 200, lg: 260 }}
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme == "dark"
                  ? theme.colors.dark[8]
                  : theme.white,
              borderColor:
                theme.colorScheme == "dark"
                  ? theme.colors.dark[7]
                  : theme.colors.gray[2],
            })}
            hidden={!opened}
          >
            <Stack spacing="xs">
              {headings.map((guide) => {
                const href = `/guide${routePath(...guide.route.slugs)}`;

                return (
                  <Link href={href} passHref key={guide.path}>
                    <NavLink
                      label={guide.front.title}
                      active={router.asPath.startsWith(href)}
                      component="a"
                      onClick={() => setOpened(false)}
                    />
                  </Link>
                );
              })}
            </Stack>
          </Navbar>
        }
      >
        <Paper p="xl" shadow="md" sx={{ position: "relative", zIndex: 2 }}>
          <GuideContent guide={guide} content={markdown} />
        </Paper>
        <Footer />
      </AppShell>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const path = slugsToPath(params!.slug);

  return {
    props: {
      guide: guideData(path),
      markdown: mdBody(path),
      headings: guideHeadings(),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = guideSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default Guide;

{
  /* <div className="hidden md:flex flex-col gap-2 container max-w-[14rem]">
            <h3 className="text-lg font-bold px-4 mb-2 flex items-center gap-2">
              <ReadFilled className="flex" />
              Guides
            </h3>
            {headings.map((guideHeading) => (
              <GuideNav
                key={guideHeading.route.slugs.join("/")}
                guide={guideHeading}
                expanded={guide.key === guideHeading.front.key}
              />
            ))}
          </div> */
}
