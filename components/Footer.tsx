import { FunctionComponent } from "react";
import {
  Space,
  Footer as MFooter,
  Container,
  Stack,
  Text,
} from "@mantine/core";
import InlineLink from "./InlineLink";

interface Props {
  indent?: boolean;
  center?: boolean;
}

const Footer: FunctionComponent<Props> = ({ indent = false, center }) => {
  const height = "8rem";

  return (
    <>
      <Space sx={{ height }}></Space>
      <MFooter
        height={height}
        sx={(theme) => ({
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          backgroundColor:
            theme.colorScheme == "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
        withBorder={false}
        className={indent ? "ml-0 sm:ml-[200px] lg:ml-[260px]" : ""}
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
