import { FunctionComponent, useRef } from "react";
import { StaticImageData } from "next/image";
import { Carousel } from "@mantine/carousel";
import { Group } from "@mantine/core";
import { Parallax } from "react-scroll-parallax";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import browseImage from "../public/images/showcase-browse.jpg";
import novelImage from "../public/images/showcase-novel.jpg";
import readerImage from "../public/images/showcase-reader.jpg";

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

const buildCard = (src: StaticImageData, alt: string) => (
  <div className="w-full lg:w-72 aspect-9/16">
    <Image src={src} alt={alt} className="rounded-lg shadow-md border" />
  </div>
);

const Showcase: FunctionComponent = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="mt-24">
      <Group
        position="center"
        align="center"
        spacing="xl"
        p="lg"
        grow
        className="hidden sm:flex"
      >
        {cards.map(({ key, alt, src, speed }) => (
          <Parallax key={key} speed={speed}>
            {buildCard(src, alt)}
          </Parallax>
        ))}
      </Group>
      <Carousel
        slideGap="xs"
        loop
        className="block sm:hidden"
        withIndicators
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {cards.map(({ key, alt, src, speed }) => (
          <Carousel.Slide key={key}>
            <div className="flex items-center w-full">
              {buildCard(src, alt)}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Showcase;
