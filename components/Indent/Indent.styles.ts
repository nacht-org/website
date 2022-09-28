import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  indent: {
    padding: theme.spacing.lg,

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      padding: theme.spacing.xl,
    },

    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      padding: theme.spacing.xl * 2,
    },
  },
}));
