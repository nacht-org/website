import { FunctionComponent } from "react";
import { FooterInner, FooterWrapper } from "../../Layout/Footer";
import IndentWrapper from "../Indent/IndentWrapper/IndentWrapper";

const IndentFooter: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <IndentWrapper fill>
        <FooterInner preferAligned />
      </IndentWrapper>
    </FooterWrapper>
  );
};

export default IndentFooter;
