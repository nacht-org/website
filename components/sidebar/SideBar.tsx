import { FunctionComponent, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const SideBar: FunctionComponent<Props> = ({ children }) => {
  return (
    <aside
      className="fixed top-16 shrink-0 h-[calc(100vh-theme(spacing.16))] w-72 border-r overflow-auto
               hidden lg:block"
    >
      {children}
    </aside>
  );
};

export default SideBar;
