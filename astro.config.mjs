import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nacht",
      social: {
        github: "https://github.com/nacht-org/nacht",
      },
      editLink: {
        baseUrl: "https://github.com/nacht-org/website/edit/main/",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Troubleshooting",
          autogenerate: { directory: "troubleshooting" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
