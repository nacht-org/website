import { FunctionComponent } from "react";
import {
  Space,
  Footer as MFooter,
  Container,
  Stack,
  Text,
} from "@mantine/core";
import InlineLink from "../InlineLink";
import useStyles from "./Footer.styles";
import { FOOTER_HEIGHT } from "../styles";

export interface FooterProps {
  responsive?: boolean;
}

const Footer: FunctionComponent<FooterProps> = ({ responsive }) => {
  const { classes, cx } = useStyles();

  return (
    <>
      <Space className={classes.space}></Space>
      <MFooter
        height={FOOTER_HEIGHT}
        withBorder={false}
        className={cx(classes.footer, { [classes.responsive]: responsive })}
      >
        <Container className="h-full">
          <Stack
            align="center"
            justify="center"
            spacing="xs"
            className="h-full"
          >
            <Text align="center" color="dimmed">
              Contribute | Issues | Discussions | Releases
            </Text>
            <Text align="center" size="sm" color="dimmed">
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
      </MFooter>
    </>
  );
};

export default Footer;
