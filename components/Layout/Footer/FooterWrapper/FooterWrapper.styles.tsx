import { createStyles } from "@mantine/core";
import { breakpoint, FOOTER_HEIGHT } from "../../../styles";

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
}));
