import Link from "next/link";
import { FunctionComponent } from "react";

import { FaGithub } from "react-icons/fa";
import { ActionIcon } from "@mantine/core";

const CodeLink: FunctionComponent = () => {
  return (
    <Link href="https://github.com/nacht-org/nacht" passHref>
      <ActionIcon
        title="Pronomia source code"
        component="a"
        size="lg"
        target="_blank"
      >
        <FaGithub className="text-xl" />
      </ActionIcon>
    </Link>
  );
};

export default CodeLink;
