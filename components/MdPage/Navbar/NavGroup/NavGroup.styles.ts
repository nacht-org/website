import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  group: {
    padding: `${theme.spacing.sm}px ${theme.spacing.xs}px`,

    backgroundColor:
      theme.colorScheme == "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    borderLeftColor:
      theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",

    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
  },
}));
