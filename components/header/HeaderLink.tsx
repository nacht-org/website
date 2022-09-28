import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { Text, MantineTheme, NavLink } from "@mantine/core";

interface Props {
  label: string;
  href: string;
}

const HeaderLink: FunctionComponent<Props> = ({ label, href }) => {
  return (
    <Link href={href} passHref>
      <NavLink
        component="a"
        label={label}
        sx={{ width: "auto" }}
        styles={(theme) => ({ label: { fontSize: theme.spacing.md } })}
        className="hidden md:flex"
      />
    </Link>
  );
};

export default HeaderLink;
