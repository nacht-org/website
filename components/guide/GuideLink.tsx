import { FunctionComponent } from "react";
import { HeadingData } from "../../lib/markdown";
import IndentedLink from "./IndentedLink";

interface Props {
  heading: HeadingData;
  href?: string;
  route: string;
}

const GuideLink: FunctionComponent<Props> = ({ heading, href, route }) => {
  return (
    <li className="flex mb-2 w-full">
      <IndentedLink
        href={href ?? `/guide${route}/#${heading.slug}`}
        className="px-4 py-2 hover:bg-raisin-black w-full hover:text-floral-white"
        depth={heading.depth}
      >
        {heading.text}
      </IndentedLink>
    </li>
  );
};

export default GuideLink;
