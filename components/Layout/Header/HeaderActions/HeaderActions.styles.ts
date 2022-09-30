import { createStyles } from "@mantine/core";
import { breakpoint } from "../../../styles";

export default createStyles((theme) => ({
  divider: {
    display: "hidden",
    [breakpoint(theme.breakpoints.md)]: {
      display: "block",
    },
  },
}));
