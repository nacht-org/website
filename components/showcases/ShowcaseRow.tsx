import { FunctionComponent } from "react";
import ShowcaseCard from "./ShowcaseCard";

import browseImage from "../../public/images/showcase-browse.jpg";
import novelImage from "../../public/images/showcase-novel.jpg";
import readerImage from "../../public/images/showcase-reader.jpg";

const ShowcaseRow: FunctionComponent = () => {
  const images = [
    {
      src: browseImage,
      alt: "Browsing for novels",
    },
    {
      src: novelImage,
      alt: "Page showing novel information",
    },
    {
      src: readerImage,
      alt: "Reading a chapter from novel",
    },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-4 p-4 md:p-8">
      {images.map((props) => (
        <ShowcaseCard {...props} />
      ))}
    </div>
  );
};

export default ShowcaseRow;
