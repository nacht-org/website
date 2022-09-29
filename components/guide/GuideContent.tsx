import { FunctionComponent, ReactNode } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { GuideData } from "../../lib/guide";
import { Blockquote, TitleOrder, Text, Code, ScrollArea } from "@mantine/core";
import Slugger from "github-slugger";
import { useEffect } from "react";
import Heading from "../Markdown/Heading";
import { Prism } from "@mantine/prism";

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
        blockquote: ({ node, ...props }) => <Blockquote {...props} />,
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <Prism language={match[1] as any} {...props}>
              {String(children).replace(/\n$/, "")}
            </Prism>
          ) : (
            <Code className={className} {...props}>
              {children}
            </Code>
          );
        },
      }}
    ></ReactMarkdown>
  );
};

export default GuideContent;
