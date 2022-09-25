import { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
}

const ShowcaseCard: FunctionComponent<Props> = (props) => {
  return (
    <div className="w-full lg:w-72 aspect-9/16">
      <Image {...props} className="rounded-lg shadow-md border" />
    </div>
  );
};

export default ShowcaseCard;
