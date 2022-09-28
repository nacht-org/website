import { FunctionComponent, ReactNode } from "react";
import { Header as MHeader, Paper, useMantineTheme } from "@mantine/core";

export interface HeaderProps {
  children?: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  const theme = useMantineTheme();
  const shadow = theme.colorScheme == "dark" ? "md" : undefined;

  return (
    <Paper
      height={60}
      p="md"
      component={MHeader}
      shadow={shadow}
      sx={(theme) => ({
        borderColor:
          theme.colorScheme == "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[2],
      })}
    >
      <div className="flex items-center justify-between h-full">{children}</div>
    </Paper>
  );
};

export default Header;
