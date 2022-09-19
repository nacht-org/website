import { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
}

const ShowcaseCard: FunctionComponent<Props> = (props) => {
  return (
    <Image
      {...props}
      className="rounded-lg bg-floral-white w-full md:w-72 aspect-9/16 shadow-md"
    />
  );
};

export default ShowcaseCard;
