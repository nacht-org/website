import browseImage from "../../public/images/showcase-browse.jpg";
import novelImage from "../../public/images/showcase-novel.jpg";
import readerImage from "../../public/images/showcase-reader.jpg";

export const CARDS = [
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
