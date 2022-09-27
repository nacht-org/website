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
import { EditFilled } from "@ant-design/icons";
import { editPath } from "../../lib/website";
import Footer from "../../components/Footer";
import { routePath } from "../../lib/route";
import { useRouter } from "next/router";
import Header from "../../components/header/Header";
import GuideSideBar from "../../components/guide/GuideSideBar";
import GuideContent from "../../components/guide/GuideContent";

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
      <GuideSideBar guides={headings} />
      <div className="flex">
        <div className="w-full overflow-y-auto ml-0 lg:ml-72 xl:ml-0">
          <div className="container max-w-3xl w-full xl:mx-auto">
            <GuideContent guide={guide} content={markdown} />
            <div className="lg:m-4">
              <Footer />
            </div>
          </div>
        </div>
      </div>
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
