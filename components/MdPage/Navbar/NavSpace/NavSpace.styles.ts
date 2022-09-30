import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  space: {
    height: theme.spacing.xs,
    borderLeftColor:
      theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
  },
}));
