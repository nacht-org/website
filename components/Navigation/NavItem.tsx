import { NavLink } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { GuideMinimal } from "../../lib/guide";
import { routePath } from "../../lib/route";

interface Props {
  guide: GuideMinimal;
  onClick?: () => void;
}

const NavItem: FunctionComponent<Props> = ({ guide, onClick }) => {
  const router = useRouter();
  const href = `/guide${routePath(...guide.route.slugs)}`;
  const active = router.asPath.startsWith(href);

  return (
    <Link href={href} passHref key={guide.path}>
      <NavLink
        label={guide.front.title}
        active={active}
        component="a"
        onClick={onClick}
        sx={(theme) => ({
          borderLeftColor: active
            ? theme.primaryColor
            : theme.colorScheme == "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[5],
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",

          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: theme.radius.sm,
          borderBottomRightRadius: theme.radius.sm,
        })}
      />
    </Link>
  );
};

export default NavItem;
