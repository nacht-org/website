import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { Text, MantineTheme } from "@mantine/core";

interface Props {
  href: string;
  children?: ReactNode;
}

const HeaderLink: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Text
        component="a"
        size="md"
        sx={(theme) => ({
          verticalAlign: "middle",
          "&:hover": {
            color: theme.primaryColor,
          },
        })}
      >
        {children}
      </Text>
    </Link>
  );
};

export default HeaderLink;
