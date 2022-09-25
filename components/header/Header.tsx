import { FunctionComponent } from "react";
import CodeLink from "./CodeLink";
import DownloadLink from "./DownloadLink";

const Header: FunctionComponent = () => {
  return (
    <header className="sticky top-0 flex items-center bg-white dark:bg-eerie-black/90 p-4 md:p-8 z-20">
      <h1 className="font-display text-2xl">
        <a
          href="/"
          className="text-oxford-blue text-floral-white hover:text-floral-white/80 transition-colors"
        >
          Pronomia
        </a>
      </h1>
      <div className="flex flex-row items-center gap-8 ml-auto">
        <a className="hidden md:block">Getting Started</a>
        <a className="hidden md:block">Guides</a>
        <a className="hidden md:block">Privacy Policy</a>
        <div className="h-4 border-r hidden md:block"></div>
        <DownloadLink />
        <CodeLink />
      </div>
    </header>
  );
};

export default Header;
