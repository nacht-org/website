import { FunctionComponent } from "react";
import Image from "next/image";
import { Box } from "@mantine/core";
import { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
}

const ImageCard: FunctionComponent<Props> = ({ src, alt }) => {
  return (
    <Box className="w-full lg:max-w-xs aspect-9/16 rounded overflow-hidden">
      <Image src={src} alt={alt} />
    </Box>
  );
};

export default ImageCard;
