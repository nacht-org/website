import { FunctionComponent, ReactNode } from "react";
import Indent from "../Indent";
import useStyles from "./IndentWrapper.styles";

interface Props {
  fill?: boolean;
  offset?: boolean;
  children: ReactNode;
  side?: ReactNode;
}

const IndentWrapper: FunctionComponent<Props> = ({
  fill,
  offset,
  children,
  side,
}) => {
  const { classes, cx } = useStyles();

  return (
    <Indent fill={fill}>
      <div className={cx(classes.group, { [classes.side_offset]: offset })}>
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
