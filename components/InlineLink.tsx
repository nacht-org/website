import Link from "next/link";
import { Text } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  href: string;
  blank?: boolean;
  children: ReactNode;
  inherit?: boolean;
}

const InlineLink: FunctionComponent<Props> = ({
  href,
  blank,
  children,
  inherit = true,
}) => {
  return (
    <Link href={href} passHref>
      <Text
        variant="link"
        component="a"
        target={blank ? "_blank" : undefined}
        inherit={inherit}
      >
        {children}
      </Text>
    </Link>
  );
};

export default InlineLink;
