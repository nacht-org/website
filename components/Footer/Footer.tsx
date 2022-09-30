import { FunctionComponent } from "react";
import {
  Space,
  Footer as MFooter,
  Container,
  Stack,
  Text,
  Group,
} from "@mantine/core";
import InlineLink from "../InlineLink";
import useStyles from "./Footer.styles";
import { FOOTER_HEIGHT } from "../styles";
import FooterLink from "./FooterLink/FooterLink";
import { pronomia } from "../../lib/links";

export interface FooterProps {
  responsive?: boolean;
}

const Footer: FunctionComponent<FooterProps> = ({ responsive }) => {
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={classes.height}></div>
      <div
        className={cx(classes.footer, classes.height, {
          [classes.responsive]: responsive,
        })}
      >
        <Container className="h-full">
          <Stack
            align="center"
            justify="center"
            spacing="md"
            className="h-full"
          >
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
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default Footer;
