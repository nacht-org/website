import { createStyles } from "@mantine/core";
import {
  breakpoint,
  CONTENT_WIDTH,
  TABLE_OF_CONTENTS_WIDTH,
} from "../../styles";

export default createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxShadow: theme.shadows.md,
    zIndex: 2,
  },
  group: {
    display: "flex",
    alignItems: "stretch",
    gap: "2rem",
    position: "relative",
  },
  content_wrapper: {
    width: "100%",
    maxWidth: CONTENT_WIDTH,
    marginLeft: "auto",
    marginRight: "auto",

    [breakpoint(theme.breakpoints.md)]: {
      width: `calc(100% - ${TABLE_OF_CONTENTS_WIDTH})`,
    },
  },
}));
