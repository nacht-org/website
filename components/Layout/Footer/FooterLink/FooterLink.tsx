import { Button } from "@mantine/core";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  external?: boolean;
}

const FooterLink: FunctionComponent<Props> = ({ children, href, external }) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="light"
        component="a"
        target={external ? "_blank" : undefined}
      >
        {children}
      </Button>
    </Link>
  );
};

export default FooterLink;
