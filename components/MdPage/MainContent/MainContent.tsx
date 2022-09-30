import { Paper } from "@mantine/core";
import { FunctionComponent } from "react";
import { HeadingData } from "../../../lib/markdown";
import Indent from "../Indent/Indent";
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
      <Indent>
        <div className={classes.group}>
          <div className={classes.content_wrapper}>
            <RawContent content={markdown} />
          </div>
          <TableOfContents contents={contents} />
        </div>
      </Indent>
    </Paper>
  );
};

export default MainContent;
