import Link from "next/link";
import { FunctionComponent } from "react";

import { FaGithub } from "react-icons/fa";
import { ActionIcon } from "@mantine/core";
import { nacht } from "../../../../lib/links";

const CodeLink: FunctionComponent = () => {
  return (
    <Link href={nacht.source} passHref>
      <ActionIcon
        title="Nacht source code"
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
