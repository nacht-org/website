import { FunctionComponent } from "react";
import CodeLink from "../CodeLink.tsx/CodeLink";
import { Group, Divider } from "@mantine/core";
import ColorSchemeToggle from "../ColorSchemeToggle.tsx/ColorSchemeToggle";
import useStyles from "./HeaderActions.styles";

const HeaderActions: FunctionComponent = () => {
  const { classes } = useStyles();

  return (
    <Group spacing="md" align="center">
      <Divider orientation="vertical" my="xs" className={classes.divider} />
      <CodeLink />
      <ColorSchemeToggle />
    </Group>
  );
};

export default HeaderActions;
