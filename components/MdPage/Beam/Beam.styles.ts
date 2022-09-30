import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  beam: {
    backgroundColor:
      theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
  },
  title: {
    fontSize: "3rem",
    marginBottom: "0.25rem",
    fontWeight: 1000,
  },
}));
