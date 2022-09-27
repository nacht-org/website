import Link from "next/link";
import { FunctionComponent } from "react";

import { GithubOutlined } from "@ant-design/icons";
import IconButton from "../IconButton";
import { ActionIcon } from "@mantine/core";

const CodeLink: FunctionComponent = () => {
  return (
    <Link href="https://github.com/nacht-org/nacht" passHref>
      <ActionIcon component="a" size="lg" target="_blank">
        <GithubOutlined className="text-xl flex" />
      </ActionIcon>
    </Link>
  );
};

export default CodeLink;
