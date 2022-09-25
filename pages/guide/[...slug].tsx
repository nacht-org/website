import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { guideSlugs, GuideData, slugsToPath, guideData } from "../../lib/guide";
import { mdBody } from "../../lib/markdown";
import Head from "next/head";

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
        <div className=" markdown container max-w-3xl">
          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeAutolinkHeadings]}
          ></ReactMarkdown>
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
