import { Title, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { FunctionComponent } from "react";

const HeaderTitle: FunctionComponent = () => {
  return (
    <Link href="/" passHref>
      <UnstyledButton component="a">
        <Title order={1} className="font-display text-2xl" weight="normal">
          Pronomia
        </Title>
      </UnstyledButton>
    </Link>
  );
};

export default HeaderTitle;
