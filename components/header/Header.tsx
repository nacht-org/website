import { FunctionComponent } from "react";
import CodeLink from "./CodeLink";
import DownloadLink from "./DownloadLink";
import HeaderLink from "./HeaderLink";

interface Props {
  sticky?: boolean;
}

const Header: FunctionComponent<Props> = ({ sticky = false }) => {
  const prefix = sticky ? "sticky top-0" : "";

  return (
    <header className={`${prefix} flex items-center p-4 z-20 border-b`}>
      <h1 className="font-display text-2xl">
        <a href="/">Pronomia</a>
      </h1>
      <div className="flex flex-row items-center gap-8 ml-auto">
        <HeaderLink href="/guide/getting-started">Getting Started</HeaderLink>
        <HeaderLink href="">Guides</HeaderLink>
        <HeaderLink href="">Privacy Policy</HeaderLink>
        <div className="h-8 border-r hidden md:block"></div>
        <DownloadLink />
        <CodeLink />
      </div>
    </header>
  );
};

export default Header;
