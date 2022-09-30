import { Box, Text, Space } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";
import useStyles from "./NavGroup.styles";

interface Props {
  title: string;
  children: ReactNode;
}

const NavGroup: FunctionComponent<Props> = ({ title, children }) => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.group}>
        <Text size="sm" color="dimmed">
          {title}
        </Text>
      </div>
      {children}
    </div>
  );
};

export default NavGroup;
