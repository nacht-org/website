import { FunctionComponent } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { editPath } from "../../lib/website";
import { GuideData } from "../../lib/guide";
import { Group, Title, TitleOrder, Text } from "@mantine/core";
import InlineLink from "../InlineLink";

interface Props {
  guide: GuideData;
  content: string;
}

const GuideContent: FunctionComponent<Props> = ({ guide, content }) => {
  return (
    <main>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeAutolinkHeadings]}
        components={{
          h1: ({ node, ...props }) => <Title order={1} {...props} />,
          h2: ({ node, ...props }) => <Title order={2} {...props} />,
          h3: ({ node, ...props }) => <Title order={3} {...props} />,
          h4: ({ node, ...props }) => <Title order={4} {...props} />,
          h5: ({ node, ...props }) => <Title order={5} {...props} />,
          h6: ({ node, ...props }) => <Title order={6} {...props} />,
        }}
      ></ReactMarkdown>
    </main>
  );
};

export default GuideContent;
