import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";

import {
  guideSlugs,
  GuideData,
  slugsToPath,
  guideData,
  guideGroups,
  GuideGroup,
} from "../lib/guide";
import { HeadingData, mdBody, parseHeadings } from "../lib/markdown";
import Header from "../components/Layout/Header/Header";
import RawContent from "../components/MdPage/RawContent/RawContent";
import {
  AppShell,
  Burger,
  Group,
  MediaQuery,
  NavLink,
  Paper,
  Stack,
  Box,
  Text,
  Title,
  Space,
} from "@mantine/core";
import HeaderActions from "../components/Layout/Header/HeaderActions/HeaderActions";
import Link from "next/link";
import Footer from "../components/Layout/Footer/Footer";
import { useState } from "react";
import HeaderTitle from "../components/Layout/Header/HeaderTitle/HeaderTitle";
import Labeled from "../components/MdPage/Labeled/Labeled";
import { TbEdit, TbClock, TbList } from "react-icons/tb";
import TimeAgo from "react-timeago";
import InlineLink from "../components/InlineLink";
import { editPath } from "../lib/links";
import Indent from "../components/MdPage/Indent/Indent";
import Navbar from "../components/MdPage/Navbar/Navbar";
import {
  breakpoint,
  CONTENT_WIDTH,
  HEADER_HEIGHT,
  NAVBAR_WIDTH,
  TABLE_OF_CONTENTS_WIDTH,
} from "../components/styles";

interface Props {
  guide: GuideData;
  markdown: string;
  groups: GuideGroup[];
  contents: HeadingData[];
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const MdPage: NextPage<Props> = ({ guide, markdown, groups, contents }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <title>{guide.title} | Promonia</title>
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
            groups={groups}
            hidden={!opened}
            onItemClicked={() => setOpened(false)}
          ></Navbar>
        }
      >
        <Paper shadow="md" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme == "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            })}
          >
            <Indent>
              <Title
                order={1}
                sx={{
                  fontSize: "3rem",
                  marginBottom: "0.25rem",
                  fontWeight: 1000,
                }}
              >
                {guide.title}
              </Title>
              <Text size="lg" mb="xl">
                {guide.description}
              </Text>
              <Stack>
                <Labeled label="Docs">
                  <InlineLink href={editPath(guide.path)}>
                    <Group spacing="xs">
                      <TbEdit />
                      <Text size="sm">Edit this page</Text>
                    </Group>
                  </InlineLink>
                </Labeled>
                <Labeled label="Last updated">
                  <Group spacing="xs">
                    <TbClock />
                    <Text size="sm">
                      <TimeAgo date={guide.dateModified} />
                    </Text>
                  </Group>
                </Labeled>
              </Stack>
            </Indent>
          </Box>
          <Indent>
            <Group
              align="stretch"
              sx={{ gap: "2rem", position: "relative" }}
              noWrap
            >
              <Box
                sx={(theme) => ({
                  width: "100%",
                  maxWidth: CONTENT_WIDTH,
                  marginLeft: "auto",
                  marginRight: "auto",

                  [breakpoint(theme.breakpoints.md)]: {
                    width: `calc(100% - ${TABLE_OF_CONTENTS_WIDTH})`,
                  },
                })}
              >
                <RawContent content={markdown} />
              </Box>
              <div className="hidden md:block">
                <Box
                  sx={(theme) => ({
                    position: "sticky",
                    top: HEADER_HEIGHT + theme.spacing.xl * 2,
                    width: "15rem",
                  })}
                >
                  <Stack spacing={0}>
                    <Group mb="md">
                      <TbList />
                      <Text size="sm" span>
                        Table of contents
                      </Text>
                    </Group>
                    {contents
                      .filter((content) => content.depth > 1)
                      .map((content) => {
                        const active = false;

                        return (
                          <Link href={`#${content.slug}`} passHref>
                            <NavLink
                              label={content.title}
                              sx={(theme) => ({
                                borderLeftColor: active
                                  ? theme.primaryColor
                                  : theme.colorScheme == "dark"
                                  ? theme.colors.dark[6]
                                  : theme.colors.gray[5],
                                borderLeftWidth: "1px",
                                borderLeftStyle: "solid",
                              })}
                              styles={{
                                label: {
                                  padding: (content.depth - 2) * 8,
                                },
                              }}
                            ></NavLink>
                          </Link>
                        );
                      })}
                  </Stack>
                </Box>
              </div>
            </Group>
          </Indent>
        </Paper>
        <Footer responsive />
      </AppShell>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const path = slugsToPath(params!.slug);
  const markdown = mdBody(path);

  return {
    props: {
      guide: guideData(path),
      markdown,
      groups: guideGroups(),
      contents: parseHeadings(markdown),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = guideSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default MdPage;
