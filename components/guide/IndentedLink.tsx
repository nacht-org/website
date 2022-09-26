import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { HeadingDepth } from "../../lib/markdown";

interface Props {
  href: string;
  depth: HeadingDepth;
  className?: string;
  children: ReactNode;
}

const IndentedLink: FunctionComponent<Props> = ({
  depth,
  className,
  children,
  href,
}) => {
  const composite = [classNameForDepth(depth), className ?? ""].join(" ");

  return (
    <Link href={href} passHref>
      <a className={composite}>{children}</a>
    </Link>
  );
};

function classNameForDepth(depth: HeadingDepth): string {
  switch (depth) {
    case 1:
      return "pl-4";
    case 2:
      return "pl-6";
    case 3:
      return "pl-8";
    case 4:
      return "pl-10";
    case 5:
      return "pl-12";
    case 6:
      return "pl-14";
  }
}

export default IndentedLink;
