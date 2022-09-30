import { FunctionComponent } from "react";
import { FooterInner, FooterWrapper } from "../../Layout/Footer";
import Indent from "../Indent/Indent";
import useStyles from "./Indent.styles";

const IndentFooter: FunctionComponent = () => {
  const { classes } = useStyles();

  return (
    <FooterWrapper>
      <Indent fill>
        <div className={classes.group}>
          <div className={classes.content_wrapper}>
            <FooterInner />
            <div className={classes.table}></div>
          </div>
        </div>
      </Indent>
    </FooterWrapper>
  );
};

export default IndentFooter;
