import { Box, Text, Space } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const NavGroup: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <Box>
      <Box
        px="sm"
        py="xs"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme == "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
          borderLeftColor:
            theme.colorScheme == "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[5],
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",

          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: theme.radius.sm,
          borderBottomRightRadius: theme.radius.sm,
        })}
      >
        <Text size="sm" color="dimmed">
          {title}
        </Text>
      </Box>
      {children}
    </Box>
  );
};

export default NavGroup;
