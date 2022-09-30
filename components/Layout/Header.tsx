import { FunctionComponent, ReactNode } from "react";
import { Box, Header as MantineHeader } from "@mantine/core";
import useStyles from "./Header.styles";
import { HEADER_HEIGHT } from "../styles";

export interface HeaderProps {
  children?: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box
      height={HEADER_HEIGHT}
      component={MantineHeader}
      className={classes.header}
    >
      <div className="flex items-center justify-between h-full">{children}</div>
    </Box>
  );
};

export default Header;
