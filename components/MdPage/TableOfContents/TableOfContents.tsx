import { Group, Stack, Text, NavLink } from "@mantine/core";
import Link from "next/link";
import { FunctionComponent } from "react";
import { TbList } from "react-icons/tb";
import { HeadingData } from "../../../lib/markdown";
import useStyles from "./TableOfContents.styles";

interface Props {
  contents: HeadingData[];
}

const TableOfContents: FunctionComponent<Props> = ({ contents }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.hide}>
      <div className={classes.toc}>
        <Stack spacing={0}>
          <Group mb="md">
            <TbList />
            <Text size="sm" span>
              Table of contents
            </Text>
          </Group>
          {contents
            .filter((content) => content.depth > 1)
            .map((content) => {
              const active = false;

              return (
                <Link href={`#${content.slug}`} passHref>
                  <NavLink
                    key={content.slug}
                    label={content.title}
                    className={cx(classes.link, { [classes.active]: active })}
                    styles={{
                      label: {
                        padding: (content.depth - 2) * 8,
                      },
                    }}
                  ></NavLink>
                </Link>
              );
            })}
        </Stack>
      </div>
    </div>
  );
};

export default TableOfContents;
