import { FunctionComponent } from "react";
import useStyles from "./NavSpace.styles";

const NavSpace: FunctionComponent = () => {
  const { classes } = useStyles();
  return <div className={classes.space} />;
};

export default NavSpace;
