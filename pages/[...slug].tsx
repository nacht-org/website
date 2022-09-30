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
import { AppShell, Burger, Group, MediaQuery } from "@mantine/core";
import HeaderActions from "../components/Layout/Header/HeaderActions/HeaderActions";
import { useState } from "react";
import HeaderTitle from "../components/Layout/Header/HeaderTitle/HeaderTitle";
import Navbar from "../components/MdPage/Navbar/Navbar";
import Beam from "../components/MdPage/Beam/Beam";
import MainContent from "../components/MdPage/MainContent/MainContent";
import IndentFooter from "../components/MdPage/IndentFooter/IndentFooter";

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
        <article>
          <Beam info={guide} />
          <MainContent markdown={markdown} contents={contents} />
        </article>
        <IndentFooter />
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
