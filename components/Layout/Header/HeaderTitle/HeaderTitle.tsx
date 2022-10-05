import { Title, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { FunctionComponent } from "react";
import useStyles from "./HeaderTitle.styles";

const HeaderTitle: FunctionComponent = () => {
  const { classes, cx } = useStyles();

  return (
    <Link href="/" passHref>
      <UnstyledButton component="a">
        <Title
          order={1}
          className={cx("font-display", classes.title)}
          weight="normal"
        >
          Nacht
        </Title>
      </UnstyledButton>
    </Link>
  );
};

export default HeaderTitle;
