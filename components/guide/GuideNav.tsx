import Link from "next/link";
import { FunctionComponent } from "react";
import { GuideHeading } from "../../lib/guide";
import { routePath } from "../../lib/route";
import GuideLink from "./GuideLink";
import IndentedLink from "./IndentedLink";

interface Props {
  guide: GuideHeading;
}

const GuideNav: FunctionComponent<Props> = ({ guide }) => {
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
      {guide.headings
        .filter((heading) => heading.depth > 1)
        .map((heading) => (
          <GuideLink heading={heading} route={route} />
        ))}
    </ul>
  );
};

export default GuideNav;
