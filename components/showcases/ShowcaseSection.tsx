import { FunctionComponent } from "react";
import ShowcaseCard from "./ShowcaseCard";

import browseImage from "../../public/images/showcase-browse.jpg";
import novelImage from "../../public/images/showcase-novel.jpg";
import readerImage from "../../public/images/showcase-reader.jpg";
import { Parallax } from "react-scroll-parallax";

const ShowcaseSection: FunctionComponent = () => {
  const cards = [
    {
      key: "browse",
      src: browseImage,
      alt: "Browsing for novels",
      speed: -5,
    },
    {
      key: "novel",
      src: novelImage,
      alt: "Page showing novel information",
      speed: 0,
    },
    {
      key: "reader",
      src: readerImage,
      alt: "Reading a chapter from novel",
      speed: -10,
    },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-8 p-4 md:p-8 mt-24">
      {cards.map(({ key, alt, src, speed }) => (
        <Parallax key={key} speed={speed}>
          <ShowcaseCard {...{ alt, src }} />
        </Parallax>
      ))}
    </div>
  );
};

export default ShowcaseSection;
