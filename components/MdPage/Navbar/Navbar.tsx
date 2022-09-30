import { FunctionComponent } from "react";
import { NAVBAR_WIDTH } from "../../styles";
import { Navbar as MantineNavbar, Stack } from "@mantine/core";
import useStyles from "./Navbar.styles";
import { GuideGroup } from "../../../lib/guide";
import NavGroup from "./NavGroup/NavGroup";
import NavSpace from "./NavSpace/NavSpace";
import NavItem from "./NavItem/NavItem";

interface Props {
  groups: GuideGroup[];
  hidden: boolean;
  onItemClicked: () => void;
}

const Navbar: FunctionComponent<Props> = ({
  groups,
  hidden,
  onItemClicked,
}) => {
  const { classes } = useStyles();

  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      width={NAVBAR_WIDTH}
      hidden={hidden}
      className={classes.navbar}
    >
      <Stack spacing="xs">
        {groups.map((group) => {
          return (
            <NavGroup title={group.title}>
              {group.guides.map((guide) => (
                <>
                  <NavSpace />
                  <NavItem guide={guide} onClick={onItemClicked} />
                </>
              ))}
            </NavGroup>
          );
        })}
      </Stack>
    </MantineNavbar>
  );
};

export default Navbar;
