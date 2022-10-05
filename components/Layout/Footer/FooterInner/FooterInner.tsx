import { FunctionComponent } from "react";
import { nacht } from "../../../../lib/links";
import FooterLink from "../FooterLink/FooterLink";
import useStyles from "./FooterInner.styles";
import { Text } from "@mantine/core";
import InlineLink from "../../../InlineLink";

interface Props {
  preferAligned?: boolean;
}

const FooterInner: FunctionComponent<Props> = ({ preferAligned }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.stack, { [classes.aligned]: preferAligned })}>
      <div className={classes.links}>
        <FooterLink href="/about/contribute">Contribute</FooterLink>
        <FooterLink href={nacht.issues} external>
          Issues
        </FooterLink>
        <FooterLink href={nacht.discussions} external>
          Discussions
        </FooterLink>
        <FooterLink href={nacht.releases} external>
          Releases
        </FooterLink>
      </div>
      <Text align="center" size="xs" color="dimmed">
        Built by{" "}
        <InlineLink href="https://github.com/mensch272" blank>
          Mohamed Haisham
        </InlineLink>{" "}
        using{" "}
        <InlineLink href="https://mantine.dev/" blank>
          Mantine
        </InlineLink>{" "}
        and{" "}
        <InlineLink href="https://tailwindcss.com/" blank>
          Tailwind
        </InlineLink>
      </Text>
    </div>
  );
};

export default FooterInner;
