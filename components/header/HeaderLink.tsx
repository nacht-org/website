import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  href: string;
  children?: ReactNode;
}

const HeaderLink: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className="hidden md:block">{children}</a>
    </Link>
  );
};

export default HeaderLink;
