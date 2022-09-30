import { FunctionComponent } from "react";
import FooterInner from "./FooterInner/FooterInner";
import FooterWrapper from "./FooterWrapper/FooterWrapper";

const SimpleFooter: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <FooterInner />
    </FooterWrapper>
  );
};

export default SimpleFooter;
