import { FunctionComponent } from "react";
import CodeLink from "./CodeLink";
import HeaderLink from "./HeaderLink";
import { Group, Divider, MediaQuery } from "@mantine/core";
import ColorSchemeToggle from "./ColorSchemeToggle";

const HeaderActions: FunctionComponent = () => {
  return (
    <Group spacing="md" align="center">
      <HeaderLink href="/guide/getting-started">Getting Started</HeaderLink>
      <HeaderLink href="#null">Privacy Policy</HeaderLink>
      <Divider orientation="vertical" my="xs" className="hidden md:block" />
      <CodeLink />
      <ColorSchemeToggle />
    </Group>
  );
};

export default HeaderActions;