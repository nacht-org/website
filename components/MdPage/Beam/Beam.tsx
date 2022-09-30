import { Title, Text, Stack, Group } from "@mantine/core";
import { FunctionComponent } from "react";
import { TbClock, TbEdit } from "react-icons/tb";
import { GuideData } from "../../../lib/guide";
import InlineLink from "../../InlineLink";
import Indent from "../Indent/Indent";
import Labeled from "./Labeled/Labeled";
import TimeAgo from "react-timeago";
import useStyles from "./Beam.styles";
import { editPath } from "../../../lib/links";

interface Props {
  info: GuideData;
}

const Beam: FunctionComponent<Props> = ({ info }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.beam}>
      <Indent>
        <Title order={1} className={classes.title}>
          {info.title}
        </Title>
        <Text size="lg" mb="xl">
          {info.description}
        </Text>
        <Stack>
          <Labeled label="Docs">
            <InlineLink href={editPath(info.path)}>
              <Group spacing="xs">
                <TbEdit />
                <Text size="sm">Edit this page</Text>
              </Group>
            </InlineLink>
          </Labeled>
          <Labeled label="Last updated">
            <Group spacing="xs">
              <TbClock />
              <Text size="sm">
                <TimeAgo date={info.dateModified} />
              </Text>
            </Group>
          </Labeled>
        </Stack>
      </Indent>
    </div>
  );
};

export default Beam;
