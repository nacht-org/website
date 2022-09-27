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
      className={`flex items-center z-20 border-b bg-floral-white h-16 ${className} `}
    >
      <h1 className="font-display text-2xl m-4">
        <a href="/">Pronomia</a>
      </h1>
      <div className="flex flex-row items-center gap-8 m-4 ml-auto">
        {children}
      </div>
    </header>
  );
};

export default Header;
