import React, { ReactNode } from "react";
import { FunctionComponent } from "react";
import Slugger from "github-slugger";
import { Title, TitleOrder, Box } from "@mantine/core";
import Link from "next/link";

function flatten(text: string, child: any): any {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

interface Props {
  slugger: Slugger;
  level: TitleOrder;
  children: ReactNode;
}

const Heading: FunctionComponent<Props> = (props) => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, "");
  const slug = props.slugger.slug(text);

  return (
    <>
      <Title id={slug} order={props.level}>
        <Link href={`#${slug}`} passHref>
          <Box component="a" sx={{ textDecoration: "none", color: "inherit" }}>
            {props.children}
          </Box>
        </Link>
      </Title>
    </>
  );
};

export default Heading;
