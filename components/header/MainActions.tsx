import { FunctionComponent } from "react";
import CodeLink from "./CodeLink";
import DownloadLink from "./DownloadLink";
import HeaderLink from "./HeaderLink";

const MainActions: FunctionComponent = () => {
  return (
    <>
      <HeaderLink href="/guide/getting-started">Getting Started</HeaderLink>
      <HeaderLink href="">Guides</HeaderLink>
      <HeaderLink href="">Privacy Policy</HeaderLink>
      <div className="h-8 border-r hidden md:block"></div>
      <DownloadLink />
      <CodeLink />
    </>
  );
};

export default MainActions;
