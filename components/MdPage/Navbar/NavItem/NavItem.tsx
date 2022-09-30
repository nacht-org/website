import { NavLink } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { GuideMinimal } from "../../../../lib/guide";
import { routePath } from "../../../../lib/route";
import useStyles from "./NavItem.styles";

interface Props {
  guide: GuideMinimal;
  onClick?: () => void;
}

const NavItem: FunctionComponent<Props> = ({ guide, onClick }) => {
  const { classes, cx } = useStyles();

  const router = useRouter();
  const href = routePath(...guide.route.slugs);
  const active = router.asPath.startsWith(href);

  return (
    <Link href={href} passHref key={guide.path}>
      <NavLink
        label={guide.front.title}
        active={active}
        component="a"
        onClick={onClick}
        className={cx(classes.item, { [classes.active]: active })}
      />
    </Link>
  );
};

export default NavItem;
