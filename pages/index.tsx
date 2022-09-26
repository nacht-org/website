import type { NextPage } from "next";
import ShowcaseSection from "../components/showcases/ShowcaseSection";
import { GithubOutlined } from "@ant-design/icons";
import Button from "../components/Button";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Promonia</title>
        <meta
          name="description"
          content="Free and open source novel reader designed to be user friendly and
            customizable"
        />
      </Head>
      <div className="h-full w-full">
        <div className="mb-32"></div>

        <div className="flex flex-col items-center w-100 p-4 md:p-8">
          <h1 className="font-display text-5xl md:text-7xl text-center mb-6">
            Pronomia
          </h1>
          <span className="text-2xl md:text-3xl text-center max-w-5xl mb-8">
            Free and open source novel reader designed to be user friendly and
            customizable.
          </span>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button href="/guide/getting-started">Getting Started</Button>
            <Button className="flex items-center gap-2" href="" secondary>
              <GithubOutlined className="flex" /> Source Code
            </Button>
          </div>
        </div>

        <ShowcaseSection />
      </div>
    </MainLayout>
  );
};

export default Home;
