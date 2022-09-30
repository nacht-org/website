import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "../../styles";

export default createStyles((theme) => ({
  header: {
    height: HEADER_HEIGHT,
    padding: theme.spacing.md,
    boxShadow: theme.colorScheme == "dark" ? "md" : undefined,
    borderColor:
      theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.gray[2],
  },
}));
