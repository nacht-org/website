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
import { EditFilled } from "@ant-design/icons";
import { editPath } from "../../lib/website";
import Footer from "../../components/Footer";
import { SideTile } from "../../components/Side";
import { routePath } from "../../lib/route";
import { useRouter } from "next/router";

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
      <div className="flex">
        <aside className="h-screen sticky top-0 w-72 overflow-auto border-r hidden md:block">
          <nav>
            {headings.map((g) => {
              const href = `/guide${routePath(...g.route.slugs)}`;

              return (
                <SideTile
                  key={g.path}
                  title={g.front.title}
                  href={href}
                  selected={router.asPath.startsWith(href)}
                />
              );
            })}
          </nav>
        </aside>

        <div className="container max-w-3xl w-full">
          <main className="markdown m-8 mb-0">
            <h1>{guide.title}</h1>
            <div className="flex items-center gap-8 text-sm">
              <a
                className="flex gap-2 items-center"
                href={editPath(guide.path)}
              >
                <EditFilled className="flex" /> Edit page
              </a>
              <span className="">
                Last updated:{" "}
                <TimeAgo date={guide.dateModified} className="ml-1" />
              </span>
            </div>
            <ReactMarkdown
              children={markdown}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeAutolinkHeadings]}
            ></ReactMarkdown>
            <hr className="border-t-floral-white/20 my-8" />
          </main>
          <div className="m-4">
            <Footer auto={false} />
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
