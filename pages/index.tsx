import type { NextPage } from "next";
import CodeLink from "../components/header/CodeLink";
import DownloadLink from "../components/header/DownloadLink";
import ShowcaseSection from "../components/showcases/ShowcaseSection";

import { BookOutlined, GithubOutlined } from "@ant-design/icons";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-eerie-black h-full w-full">
      <div className="mb-32"></div>

      <div className="flex flex-col items-center w-100 p-4 md:p-8">
        <h1 className="font-display text-5xl md:text-7xl text-oxford-blue dark:text-floral-white text-center mb-6">
          Pronomia
        </h1>
        <span className="text-2xl md:text-3xl text-floral-white text-center max-w-5xl mb-8">
          Free and open source novel reader designed to be user friendly and
          customizable.
        </span>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button href="">Getting Started</Button>
          <Button className="flex items-center gap-2" href="" secondary>
            <GithubOutlined className="flex" /> Source Code
          </Button>
        </div>
      </div>

      <ShowcaseSection />
    </div>
  );
};

export default Home;
