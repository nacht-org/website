import Link from "next/link";
import { FunctionComponent } from "react";

import { GithubOutlined } from "@ant-design/icons";
import IconButton from "../IconButton";

const CodeLink: FunctionComponent = () => {
  return (
    <IconButton href={"https://github.com/nacht-org/nacht"}>
      <GithubOutlined className="flex" />
    </IconButton>
  );
};

export default CodeLink;
