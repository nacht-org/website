import { FunctionComponent, ReactNode } from "react";
import Indent from "../Indent";
import useStyles from "./IndentWrapper.styles";

interface Props {
  fill?: boolean;
  children: ReactNode;
  side?: ReactNode;
}

const IndentWrapper: FunctionComponent<Props> = ({ fill, children, side }) => {
  const { classes } = useStyles();

  return (
    <Indent fill={fill}>
      <div className={classes.group}>
        <div className={classes.content_wrapper}>{children}</div>
        {side != null ? (
          side
        ) : (
          <div className={classes.hide}>
            <div className={classes.table}></div>
          </div>
        )}
      </div>
    </Indent>
  );
};

export default IndentWrapper;
