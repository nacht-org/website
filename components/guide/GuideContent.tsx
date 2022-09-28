import { FunctionComponent } from "react";

import { FaEdit } from "react-icons/fa";
import TimeAgo from "react-timeago";
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
      <Title order={1} className="mb-1">
        {guide.title}
      </Title>
      <Group align="center" spacing="lg" mb="xl">
        <InlineLink href={editPath(guide.path)}>
          <Text color="dimmed" size="sm">
            <FaEdit className="inline" /> Edit page
          </Text>
        </InlineLink>
        <Text color="dimmed" size="sm">
          Last updated: <TimeAgo date={guide.dateModified} className="ml-1" />
        </Text>
      </Group>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeAutolinkHeadings]}
        components={{
          h1: ({ node, level, ...props }) => (
            <Title order={level as TitleOrder} {...props} />
          ),
          h2: ({ node, level, ...props }) => (
            <Title order={level as TitleOrder} {...props} />
          ),
          h3: ({ node, level, ...props }) => (
            <Title order={level as TitleOrder} {...props} />
          ),
          h4: ({ node, level, ...props }) => (
            <Title order={level as TitleOrder} {...props} />
          ),
          h5: ({ node, level, ...props }) => (
            <Title order={level as TitleOrder} {...props} />
          ),
          h6: ({ node, level, ...props }) => (
            <Title order={level as TitleOrder} {...props} />
          ),
        }}
      ></ReactMarkdown>
    </main>
  );
};

export default GuideContent;
