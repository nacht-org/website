import { FunctionComponent } from "react";
import {
  Space,
  Footer as MDFooter,
  Container,
  Stack,
  Text,
} from "@mantine/core";
import InlineLink from "./InlineLink";

interface Props {
  center?: boolean;
}

const Footer: FunctionComponent<Props> = ({ center }) => {
  const height = "8rem";

  return (
    <>
      <Space sx={{ height }}></Space>
      <MDFooter
        height={height}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: -1 }}
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
      </MDFooter>
    </>
  );
};

export default Footer;
