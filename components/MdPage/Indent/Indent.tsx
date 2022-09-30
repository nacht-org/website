import { Box } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";
import useStyles from "./Indent.styles";

interface Props {
  fill?: boolean;
  children: ReactNode;
}

const Indent: FunctionComponent<Props> = ({ children, fill }) => {
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.indent, { [classes.fill]: fill })}>
      {children}
    </Box>
  );
};

export default Indent;
