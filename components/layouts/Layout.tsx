import { useRouter } from "next/router";
import { FunctionComponent, ReactNode } from "react";
import Header, { HeaderProps } from "../header/Header";
import MainActions from "../header/MainActions";

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header {...headerProps(router.asPath)}>
        <MainActions />
      </Header>
      {children}
    </>
  );
};

function headerProps(path: string): HeaderProps {
  if (path.startsWith("/guide/")) {
    return {
      className: "sticky top-0",
    };
  } else {
    return {};
  }
}

export default Layout;
