import { CaretDownFilled, CaretRightFilled } from "@ant-design/icons";
import { FunctionComponent, ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const IndentedSideTile: FunctionComponent<Props> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  return (
    <>
      <div>
        <button
          className="flex items-center w-full px-4 pl-9 py-3 hover:bg-raisin-black/10"
          onClick={toggle}
        >
          <span className="inline-flex items-center w-6 -ml-6">
            {isOpen ? (
              <CaretDownFilled className="inline" />
            ) : (
              <CaretRightFilled className="inline" />
            )}
          </span>
          {title}
        </button>
      </div>

      {isOpen && children}
    </>
  );
};

export default IndentedSideTile;
