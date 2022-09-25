import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  href: string;
  secondary?: boolean;
  className?: string;
  children?: ReactNode;
}

const Button: FunctionComponent<Props> = ({
  href,
  secondary,
  className,
  children,
}) => {
  var background = "bg-cardinal hover:bg-cardinal/80";
  if (secondary) {
    background = "bg-raisin-black hover:bg-raisin-black/80";
  }

  const _className = [
    "px-8 py-4 rounded shadow hover:shadow-md hover:text-floral-white text-lg font-bold",
    background,
    className ?? "",
  ].join(" ");

  return (
    <Link href={href} passHref>
      <a className={_className}>{children}</a>
    </Link>
  );
};

export default Button;
