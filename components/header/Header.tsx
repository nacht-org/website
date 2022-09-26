import { FunctionComponent, ReactNode } from "react";
import CodeLink from "./CodeLink";
import DownloadLink from "./DownloadLink";
import HeaderLink from "./HeaderLink";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Header: FunctionComponent<Props> = ({ className = "", children }) => {
  return (
    <header
      className={`${className} flex items-center p-4 z-20 border-b bg-floral-white`}
    >
      <h1 className="font-display text-2xl">
        <a href="/">Pronomia</a>
      </h1>
      <div className="flex flex-row items-center gap-8 ml-auto">{children}</div>
    </header>
  );
};

export default Header;
