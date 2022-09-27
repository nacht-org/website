import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { GuideHeading } from "../../lib/guide";
import { routePath } from "../../lib/route";
import { SideTile } from "../sidebar";
import SideBar from "../sidebar/SideBar";

interface Props {
  guides: GuideHeading[];
}

const GuideSideBar: FunctionComponent<Props> = ({ guides }) => {
  const router = useRouter();

  return (
    <SideBar>
      <nav>
        {guides.map((guide) => {
          const href = `/guide${routePath(...guide.route.slugs)}`;

          return (
            <SideTile
              key={guide.path}
              title={guide.front.title}
              href={href}
              selected={router.asPath.startsWith(href)}
            />
          );
        })}
      </nav>
    </SideBar>
  );
};

export default GuideSideBar;
