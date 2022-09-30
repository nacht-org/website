import { createStyles } from "@mantine/core";
import { breakpoint, FOOTER_HEIGHT, NAVBAR_WIDTH } from "../styles";

export default createStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor:
      theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
  },
  height: {
    height: FOOTER_HEIGHT.xs,
    [breakpoint(theme.breakpoints.sm)]: {
      height: FOOTER_HEIGHT.sm,
    },
  },
  links: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.md,

    [breakpoint(theme.breakpoints.sm)]: {
      flexDirection: "row",
      marginBottom: 0,
    },
  },
  responsive: {
    marginLeft: 0,

    [breakpoint(theme.breakpoints.sm)]: {
      marginLeft: NAVBAR_WIDTH.sm,
    },

    [breakpoint(theme.breakpoints.lg)]: {
      marginLeft: NAVBAR_WIDTH.lg,
    },
  },
}));
