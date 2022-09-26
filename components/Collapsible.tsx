import { FunctionComponent, ReactNode, useState } from "react";
import { ArrowRightOutlined, ArrowDownOutlined } from "@ant-design/icons";

interface Props {
  title: ReactNode;
  children: ReactNode[];
  open: boolean;
}

const Collapsible: FunctionComponent<Props> = ({ title, children, open }) => {
  const [isOpen, setOpen] = useState(open);

  return (
    <div>
      <div className="flex items-center pl-4 hover:bg-raisin-black/5">
        {isOpen ? (
          <ArrowDownOutlined className="inline" />
        ) : (
          <ArrowRightOutlined className="inline" />
        )}
        <button>{title}</button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Collapsible;
