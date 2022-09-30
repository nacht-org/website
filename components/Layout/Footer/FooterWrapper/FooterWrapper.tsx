import { FunctionComponent, ReactNode } from "react";
import useStyles from "./FooterWrapper.styles";

interface Props {
  children: ReactNode;
}

const FooterWrapper: FunctionComponent<Props> = ({ children }) => {
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={classes.height}></div>
      <div className={cx(classes.footer, classes.height)}>{children}</div>
    </>
  );
};

export default FooterWrapper;
