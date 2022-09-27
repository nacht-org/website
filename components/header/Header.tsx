import { FunctionComponent, ReactNode } from "react";
import { Header as MantineHeader, Paper, Group, Title } from "@mantine/core";

export interface HeaderProps {
  children?: ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  return (
    <Paper height="4rem" p="md" component={MantineHeader}>
      <div className="flex items-center justify-between h-full">
        <Title order={1} className="font-display text-2xl" weight="normal">
          Pronomia
        </Title>
        {children}
      </div>
    </Paper>
  );
};

export default Header;
