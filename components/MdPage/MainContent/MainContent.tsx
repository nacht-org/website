import { Paper } from "@mantine/core";
import { FunctionComponent } from "react";
import { HeadingData } from "../../../lib/markdown";
import Indent from "../Indent/Indent";
import IndentWrapper from "../Indent/IndentWrapper/IndentWrapper";
import RawContent from "../RawContent/RawContent";
import TableOfContents from "../TableOfContents/TableOfContents";
import useStyles from "./MainContent.styles";

interface Props {
  markdown: string;
  contents: HeadingData[];
}

const MainContent: FunctionComponent<Props> = ({ markdown, contents }) => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <IndentWrapper side={<TableOfContents contents={contents} />}>
        <RawContent content={markdown} />
      </IndentWrapper>
    </Paper>
  );
};

export default MainContent;
