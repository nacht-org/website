import { FunctionComponent, ReactNode } from "react";
import { Header as MHeader, Paper, Title } from "@mantine/core";

export interface HeaderProps {
  children?: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  return (
    <MHeader
      height={60}
      p="md"
      sx={(theme) => ({
        borderColor:
          theme.colorScheme == "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[2],
      })}
    >
      <div className="flex items-center justify-between h-full">
        <Title order={1} className="font-display text-2xl" weight="normal">
          Pronomia
        </Title>
        {children}
      </div>
    </MHeader>
  );
};

export default Header;
