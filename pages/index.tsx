import type { NextPage } from "next";
import { TypeAnimation } from "react-type-animation";
import CodeLink from "../components/CodeLink";
import DownloadLink from "../components/DownloadLink";
import ShowcaseRow from "../components/showcases/ShowcaseRow";

import { BookOutlined } from "@ant-design/icons";

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
          Read with no distraction
        </h1>
        <TypeAnimation
          sequence={[
            "Free and open source novel reader",
            1000,
            "Designed to be user friendly and customizable",
            1000,
            "Read your favourite novels from multiple sources",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="text-2xl md:text-3xl text-floral-white text-center h-24 md:h-16"
        />
        <a
          href=""
          className="px-8 py-4 bg-cardinal hover:bg-cardinal/80 rounded shadow hover:shadow-md hover:text-floral-white text-lg font-bold"
        >
          Getting Started
        </a>
      </div>

      <ShowcaseRow />

      <footer className="bg-raisin-black text-floral-white p-8 flex flex-col items-center">
        <div className="text-sm">
          Copyright © 2022 Mohamed Haisham | Apache-2.0 | Privacy Policy
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Home;
