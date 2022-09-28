import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown";

import {
  guideSlugs,
  GuideData,
  slugsToPath,
  guideData,
  GuideHeading,
  guideHeadings,
} from "../../lib/guide";
import { mdBody } from "../../lib/markdown";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Header from "../../components/header/Header";
import GuideContent from "../../components/guide/GuideContent";
import { AppShell } from "@mantine/core";
import MainActions from "../../components/header/MainActions";

interface Props {
  guide: GuideData;
  markdown: string;
  headings: GuideHeading[];
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const Guide: NextPage<Props> = ({ guide, markdown, headings }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Guide | {guide.title}</title>
        <meta name="description" content={guide.description} />
      </Head>
      <AppShell
        header={
          <Header>
            <MainActions />
          </Header>
        }
      >
        <div>
          <GuideContent guide={guide} content={markdown} />
        </div>
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
