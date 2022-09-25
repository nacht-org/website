import { FunctionComponent } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import IconButton from "../IconButton";

const DownloadLink: FunctionComponent = () => {
  return (
    <IconButton href="#nil">
      <DownloadOutlined className="flex" />
    </IconButton>
  );
};

export default DownloadLink;
