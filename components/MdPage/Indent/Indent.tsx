import { Box } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";
import useStyles from "./Indent.styles";

interface Props {
  children: ReactNode;
}

const Indent: FunctionComponent<Props> = ({ children }) => {
  const { classes } = useStyles();
  return <Box className={classes.indent}>{children}</Box>;
};

export default Indent;
