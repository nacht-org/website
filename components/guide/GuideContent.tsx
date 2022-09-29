import { FunctionComponent, ReactNode } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { GuideData } from "../../lib/guide";
import { TitleOrder } from "@mantine/core";
import Slugger from "github-slugger";
import { useEffect } from "react";
import Heading from "../Markdown/Heading";

interface Props {
  guide: GuideData;
  content: string;
}

type HeadingParams = { level: number; children: ReactNode };

const GuideContent: FunctionComponent<Props> = ({ guide, content }) => {
  const slugger = new Slugger();

  useEffect(() => {
    slugger.reset();
  }, [content]);

  const heading = ({ level, children }: HeadingParams) => (
    <Heading
      slugger={slugger}
      level={level as TitleOrder}
      children={children}
    />
  );

  return (
    <main>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: heading,
          h2: heading,
          h3: heading,
          h4: heading,
          h5: heading,
          h6: heading,
        }}
      ></ReactMarkdown>
    </main>
  );
};

export default GuideContent;
