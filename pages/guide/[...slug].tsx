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
  Box,
  Text,
  Space,
  Title,
  Container,
} from "@mantine/core";
import HeaderActions from "../../components/header/HeaderActions";
import Link from "next/link";
import { routePath } from "../../lib/route";
import Footer from "../../components/Footer";
import { useState } from "react";
import HeaderTitle from "../../components/header/HeaderTitle";
import NavItem from "../../components/Navigation/NavItem";
import NavGroup from "../../components/Navigation/NavGroup";
import NavSpace from "../../components/Navigation/NavSpace";
import Labeled from "../../components/Labeled";
import { TbEdit, TbClock } from "react-icons/tb";
import TimeAgo from "react-timeago";
import InlineLink from "../../components/InlineLink";
import { editPath } from "../../lib/website";
import Indent from "../../components/Indent/Indent";

interface Props {
  guide: GuideData;
  markdown: string;
  groups: GuideGroup[];
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const Guide: NextPage<Props> = ({ guide, markdown, groups }) => {
  const [opened, setOpened] = useState(false);

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
              {groups.map((group) => {
                return (
                  <NavGroup title={group.title}>
                    {group.guides.map((guide) => (
                      <>
                        <NavSpace />
                        <NavItem
                          guide={guide}
                          onClick={() => setOpened(false)}
                        />
                      </>
                    ))}
                  </NavGroup>
                );
              })}
            </Stack>
          </Navbar>
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
            <GuideContent guide={guide} content={markdown} />
          </Indent>
        </Paper>
        <Footer indent />
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
      groups: guideGroups(),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = guideSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default Guide;
