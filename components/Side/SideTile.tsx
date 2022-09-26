import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {
  title: string;
  selected?: boolean;
  href: string;
  indent?: boolean;
}

const SideTile: FunctionComponent<Props> = (props) => {
  const inverted = props.selected
    ? "bg-eerie-black text-floral-white hover:bg-eerie-black/90 hover:text-floral-white"
    : "hover:bg-raisin-black/10";

  const indent = props.indent ? "pl-14" : "pl-9";

  return (
    <Link href={props.href} passHref>
      <a className={`block w-full px-4 ${indent} py-3 ${inverted}`}>
        {props.title}
      </a>
    </Link>
  );
};

export default SideTile;
