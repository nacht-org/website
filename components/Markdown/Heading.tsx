import React, { ReactNode } from "react";
import { FunctionComponent } from "react";
import Slugger from "github-slugger";
import { Title, TitleOrder } from "@mantine/core";
import { ReactMarkdownNames } from "react-markdown/lib/ast-to-react";

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
    <Title id={slug} order={props.level}>
      {props.children}
    </Title>
  );
};

export default Heading;
