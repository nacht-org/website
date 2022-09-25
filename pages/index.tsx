import type { NextPage } from "next";
import CodeLink from "../components/CodeLink";
import DownloadLink from "../components/DownloadLink";
import ShowcaseSection from "../components/showcases/ShowcaseSection";

import { BookOutlined, GithubOutlined } from "@ant-design/icons";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-eerie-black h-full w-full">
      <header className="sticky top-0 flex items-center bg-white dark:bg-eerie-black/90 p-4 md:p-8 z-20">
        <h1 className="font-display text-2xl">
          <a
            href="/"
            className="text-oxford-blue text-floral-white hover:text-floral-white/80 transition-colors"
          >
            Pronomia
          </a>
        </h1>
        <div className="flex flex-row items-center gap-8 ml-auto">
          <a className="hidden md:block">Getting Started</a>
          <a className="hidden md:block">Guides</a>
          <a className="hidden md:block">Privacy Policy</a>
          <div className="h-4 border-r hidden md:block"></div>
          <DownloadLink />
          <CodeLink />
        </div>
      </header>

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

      <footer className="text-floral-white p-8 flex flex-col items-center">
        <div className="text-sm">
          Copyright © 2022 Mohamed Haisham | Apache-2.0 | Privacy Policy
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Home;
