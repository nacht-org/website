import { Space } from "@mantine/core";
import { FunctionComponent } from "react";

const NavSpace: FunctionComponent = () => {
  return (
    <Space
      h="xs"
      sx={(theme) => ({
        borderLeftColor:
          theme.colorScheme == "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[5],
        borderLeftWidth: "1px",
        borderLeftStyle: "solid",
      })}
    ></Space>
  );
};

export default NavSpace;
