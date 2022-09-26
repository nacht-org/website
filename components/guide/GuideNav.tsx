import Link from "next/link";
import { FunctionComponent } from "react";
import { GuideHeading } from "../../lib/guide";
import { routePath } from "../../lib/route";
import GuideLink from "./GuideLink";
import IndentedLink from "./IndentedLink";

interface Props {
  guide: GuideHeading;
  expanded: boolean;
}

const GuideNav: FunctionComponent<Props> = ({ guide, expanded }) => {
  const route = routePath(...guide.route.slugs);

  return (
    <ul>
      <li className="flex mb-2 w-full font-bold">
        <Link href={`/guide${route}`} passHref>
          <a className="px-4 py-2 hover:bg-raisin-black w-full">
            {guide.front.title}
          </a>
        </Link>
      </li>
      {expanded &&
        guide.headings
          .filter((heading) => heading.depth > 1)
          .map((heading) => (
            <GuideLink
              key={`${route}#${heading.slug}`}
              heading={heading}
              route={route}
            />
          ))}
    </ul>
  );
};

export default GuideNav;
