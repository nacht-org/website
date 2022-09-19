import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  href: string;
  children?: ReactNode;
}

const IconButton: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className="text-2xl">{children}</a>
    </Link>
  );
};

export default IconButton;
