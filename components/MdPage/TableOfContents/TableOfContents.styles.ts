import { createStyles } from "@mantine/core";
import {
  breakpoint,
  HEADER_HEIGHT,
  TABLE_OF_CONTENTS_WIDTH,
} from "../../styles";

export default createStyles((theme) => ({
  hide: {
    display: "none",
    [breakpoint(theme.breakpoints.md)]: {
      display: "inline",
    },
  },
  toc: {
    position: "sticky",
    top: HEADER_HEIGHT + theme.spacing.xl * 2,
    width: TABLE_OF_CONTENTS_WIDTH,
  },
  link: {
    borderLeftColor:
      theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[5],
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
  },
  active: {
    borderLeftColor: theme.primaryColor,
  },
}));
