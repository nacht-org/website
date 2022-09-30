import { createStyles } from "@mantine/core";
import {
  breakpoint,
  CONTENT_WIDTH,
  NAVBAR_WIDTH,
  TABLE_OF_CONTENTS_WIDTH,
} from "../../styles";

export default createStyles((theme) => ({
  group: {
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    gap: "2rem",
    position: "relative",
    marginLeft: 0,
    [breakpoint(theme.breakpoints.sm)]: {
      marginLeft: NAVBAR_WIDTH.sm,
    },
    [breakpoint(theme.breakpoints.lg)]: {
      marginLeft: NAVBAR_WIDTH.lg,
    },
  },
  content_wrapper: {
    height: "100%",
    width: "100%",
    maxWidth: CONTENT_WIDTH,
    marginLeft: "auto",
    marginRight: "auto",

    [breakpoint(theme.breakpoints.md)]: {
      width: `calc(100% - ${TABLE_OF_CONTENTS_WIDTH})`,
    },
  },
  hide: {
    display: "none",
    [breakpoint(theme.breakpoints.md)]: {
      display: "inline",
    },
  },
  table: {
    width: TABLE_OF_CONTENTS_WIDTH,
  },
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
