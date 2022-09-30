import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.white,
    borderColor:
      theme.colorScheme == "dark" ? theme.colors.dark[7] : theme.colors.gray[2],
  },
}));
