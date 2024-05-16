import { html, render } from "iares";
import type { TRoute } from "iares";

import { StationDetailPage } from "@/components/pages/StationDetailPage";
import { StationsPage } from "@/components/pages/StationsPage";
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
    regex: /^#\/$|^#\/stations$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${StationsPage} title="Estações" />`, context);
    },
  },
  {
    regex: /^#\/stations\/\d+$/,
    start: "#/",
    mount: ({ context }) => {
      render(
        html`<${StationDetailPage} title="Detalhes da estação" />`,
        context,
      );
    },
  },
];
