import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import TimeAgo from "react-timeago";

import { guideSlugs, GuideData, slugsToPath, guideData } from "../../lib/guide";
import { mdBody } from "../../lib/markdown";
import { EditFilled } from "@ant-design/icons";
import { editPath, website } from "../../lib/website";

interface Props {
  guide: GuideData;
  markdown: string;
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const Guide: NextPage<Props> = ({ guide, markdown }) => {
  return (
    <>
      <Head>
        <title>Guide | {guide.title}</title>
        <meta name="description" content={guide.description} />
      </Head>
      <main className="flex gap-12 w-full justify-center">
        <div className="hidden md:flex flex-col gap-2">
          <a className="bg-raisin-black hover:bg-raisin-black/80 py-2 px-4 rounded shadow hover:shadow-md">
            Getting Started
          </a>
        </div>
        <div className=" markdown container max-w-3xl px-4 md:px-0">
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
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = guideSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default Guide;
