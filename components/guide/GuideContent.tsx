import { FunctionComponent } from "react";

import { EditFilled } from "@ant-design/icons";
import TimeAgo from "react-timeago";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { editPath } from "../../lib/website";
import { GuideData } from "../../lib/guide";

interface Props {
  guide: GuideData;
  content: string;
}

const GuideContent: FunctionComponent<Props> = ({ guide, content }) => {
  return (
    <main className="markdown m-4 lg:m-8 mb-0">
      <h1>{guide.title}</h1>
      <div className="flex items-center gap-8 text-sm">
        <a className="flex gap-2 items-center" href={editPath(guide.path)}>
          <EditFilled className="flex" /> Edit page
        </a>
        <span className="">
          Last updated: <TimeAgo date={guide.dateModified} className="ml-1" />
        </span>
      </div>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeAutolinkHeadings]}
      ></ReactMarkdown>
      <hr className="border-t-floral-white/20 my-8" />
    </main>
  );
};

export default GuideContent;
