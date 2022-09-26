import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  href: string;
  children?: ReactNode;
  className?: string;
}

const IconButton: FunctionComponent<Props> = (props) => {
  return (
    <Link href={props.href} passHref>
      <a className={`text-2xl ${props.className ?? ""}`}>{props.children}</a>
    </Link>
  );
};

export default IconButton;
