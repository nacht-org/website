import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FunctionComponent } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorSchemeToggle: FunctionComponent = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      title="Toggle color scheme"
      onClick={() => toggleColorScheme()}
      size="lg"
      className="text-lg"
    >
      {dark ? <FaMoon /> : <FaSun />}
    </ActionIcon>
  );
};

export default ColorSchemeToggle;
