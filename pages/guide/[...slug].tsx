import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import TimeAgo from "react-timeago";

import {
  guideSlugs,
  GuideData,
  slugsToPath,
  guideData,
  GuideHeading,
  guideHeadings,
} from "../../lib/guide";
import { mdBody } from "../../lib/markdown";
import { EditFilled, ReadFilled } from "@ant-design/icons";
import { editPath } from "../../lib/website";
import GuideNav from "../../components/guide/GuideNav";

interface Props {
  guide: GuideData;
  markdown: string;
  headings: GuideHeading[];
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const Guide: NextPage<Props> = ({ guide, markdown, headings }) => {
  return (
    <>
      <Head>
        <title>Guide | {guide.title}</title>
        <meta name="description" content={guide.description} />
      </Head>
      <main className="flex gap-12 w-full justify-center px-4">
        <div className="hidden md:flex flex-col gap-2 container max-w-[14rem]">
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
        </div>
        <div className="markdown container max-w-3xl">
          <h1>{guide.title}</h1>
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeAutolinkHeadings]}
          ></ReactMarkdown>
          <hr className="border-t-floral-white/20 my-8" />
          <div className="flex justify-between">
            <span>
              Last updated:{" "}
              <TimeAgo date={guide.dateModified} className="ml-1" />
            </span>
            <a className="flex gap-2 items-center" href={editPath(guide.path)}>
              <EditFilled className="flex" /> Improve this page
            </a>
          </div>
        </div>
      </main>
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
