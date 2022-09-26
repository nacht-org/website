import { FunctionComponent } from "react";
import CodeLink from "./header/CodeLink";

interface Props {
  auto: boolean;
}

const Footer: FunctionComponent<Props> = ({ auto }) => {
  const autoText = auto ? "md:text-center" : "";
  const autoJustify = auto ? "md:justify-center" : "";

  return (
    <footer className="border-t p-4 mt-4">
      <div
        className={`container max-w-5xl mx-auto flex flex-col gap-4 pt-4 ${autoText}`}
      >
        <div className={`flex items-center text-md ${autoJustify}`}>
          <CodeLink />
        </div>
        <div className="text-raisin-black text-lg">
          Contributing to pronomia | Releases | Guide | Issue Tracker
        </div>
        <p className="text-gray-700">
          Pronomia is developed under the{" "}
          <a href="https://github.com/nacht-org" className="inline-link">
            Pronomia Organization
          </a>{" "}
          and licensed under the{" "}
          <a
            href="https://github.com/nacht-org/nacht/blob/main/LICENSE"
            className="inline-link"
          >
            Apache 2 license
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
