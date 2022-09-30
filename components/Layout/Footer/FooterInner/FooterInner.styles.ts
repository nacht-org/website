import { createStyles } from "@mantine/core";
import { breakpoint } from "../../../styles";

export default createStyles((theme) => ({
  stack: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.lg,
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.md,

    [breakpoint(theme.breakpoints.sm)]: {
      flexDirection: "row",
      marginBottom: 0,
    },
  },
  aligned: {
    [breakpoint(theme.breakpoints.sm)]: {
      alignItems: "start",
    },
  },
}));
