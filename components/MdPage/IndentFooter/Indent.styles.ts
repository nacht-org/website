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
  table: {
    width: TABLE_OF_CONTENTS_WIDTH,
    display: "none",
    [breakpoint(theme.breakpoints.md)]: {
      display: "inline",
    },
  },
}));
