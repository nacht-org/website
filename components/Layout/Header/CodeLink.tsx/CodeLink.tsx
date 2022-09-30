import Link from "next/link";
import { FunctionComponent } from "react";

import { FaGithub } from "react-icons/fa";
import { ActionIcon } from "@mantine/core";
import { pronomia } from "../../../../lib/links";

const CodeLink: FunctionComponent = () => {
  return (
    <Link href={pronomia.source} passHref>
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
