import { createStyles } from "@mantine/core";
import { breakpoint } from "../../styles";

export default createStyles((theme) => ({
  label: {
    display: "hidden",
    width: "8rem",

    [breakpoint(theme.breakpoints.md)]: {
      display: "block",
    },
  },
}));
