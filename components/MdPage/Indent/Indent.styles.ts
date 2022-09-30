import { createStyles } from "@mantine/core";
import { breakpoint } from "../../styles";

export default createStyles((theme) => ({
  indent: {
    padding: theme.spacing.lg,

    [breakpoint(theme.breakpoints.md)]: {
      padding: theme.spacing.xl,
    },

    [breakpoint(theme.breakpoints.lg)]: {
      padding: theme.spacing.xl * 2,
    },
  },
}));
