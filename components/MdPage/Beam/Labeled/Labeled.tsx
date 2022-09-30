import { Group, Text } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";
import useStyles from "./Labeled.styles";

interface Props {
  label: string;
  children: ReactNode;
}

const Labeled: FunctionComponent<Props> = ({ label, children }) => {
  const { classes } = useStyles();

  return (
    <Group align="center" spacing={0}>
      <Text size="sm" color="dimmed" className={classes.label}>
        {label}
      </Text>
      {children}
    </Group>
  );
};

export default Labeled;
