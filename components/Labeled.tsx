import { Group, MediaQuery, Text } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

const Labeled: FunctionComponent<Props> = ({ label, children }) => {
  return (
    <Group align="center" spacing={0}>
      <Text
        size="sm"
        color="dimmed"
        sx={{
          width: "8rem",
        }}
        className="hidden md:block"
      >
        {label}
      </Text>
      {children}
    </Group>
  );
};

export default Labeled;
