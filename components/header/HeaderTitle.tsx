import { Title } from "@mantine/core";
import { FunctionComponent } from "react";

const HeaderTitle: FunctionComponent = () => {
  return (
    <Title order={1} className="font-display text-2xl" weight="normal">
      Pronomia
    </Title>
  );
};

export default HeaderTitle;
