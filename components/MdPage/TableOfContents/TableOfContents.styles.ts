import { createStyles } from "@mantine/core";
import { breakpoint, HEADER_HEIGHT } from "../../styles";

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
    width: "15rem",
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
