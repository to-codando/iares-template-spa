import { html, render } from "iares";
import type { TRoute } from "iares";

import { HomePageUi } from "@/components/pages/HomePage";
import { ProjectsPage } from "@/components/pages/ProjectsPage";
import { DefaultPage } from "@/components/pages/DefaultPage";

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${DefaultPage} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${HomePageUi} title="Home" />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/projetos$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${ProjectsPage} title="Projetos" />`, context);
    },
  },
];
