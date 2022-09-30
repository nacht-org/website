import { FunctionComponent } from "react";
import { pronomia } from "../../../../lib/links";
import FooterLink from "../FooterLink/FooterLink";
import useStyles from "./FooterInner.styles";
import { Text } from "@mantine/core";
import InlineLink from "../../../InlineLink";

interface Props {
  preferAligned?: boolean;
}

const FooterInner: FunctionComponent<Props> = ({ preferAligned }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.stack}>
      <div className={classes.links}>
        <FooterLink href="/about/contribute">Contribute</FooterLink>
        <FooterLink href={pronomia.issues} external>
          Issues
        </FooterLink>
        <FooterLink href={pronomia.discussions} external>
          Discussions
        </FooterLink>
        <FooterLink href={pronomia.releases} external>
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
