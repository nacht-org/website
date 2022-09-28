import { FunctionComponent, useRef } from "react";
import { StaticImageData } from "next/image";
import { Carousel } from "@mantine/carousel";
import { Group } from "@mantine/core";
import { Parallax } from "react-scroll-parallax";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { CARDS } from "./data";
import ImageCard from "./ImageCard";

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
        {CARDS.map(({ key, alt, src, speed }) => (
          <Parallax key={key} speed={speed}>
            <ImageCard {...{ src, alt }} />
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
        {CARDS.map(({ key, alt, src, speed }) => (
          <Carousel.Slide key={key}>
            <div className="flex items-center w-full">
              <ImageCard {...{ src, alt }} />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Showcase;
