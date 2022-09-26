import { useRouter } from "next/router";
import { FunctionComponent, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../header/Header";
import MainActions from "../header/MainActions";

interface Props {
  children: ReactNode;
}

const MainLayout: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header>
        <MainActions />
      </Header>
      {children}
      <Footer responsive />
    </>
  );
};

export default MainLayout;
