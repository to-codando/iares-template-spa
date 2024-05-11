import environment from "env";
import { createApp, html, render, router } from "iares";

import { MainLayout } from "@/components/MainLayout";
import { routes } from "./routes";

export const appHost = createApp({
  onMount(context, props) {
    render(html`<${MainLayout} />`);
    router({ routes, context }).init();
  },
});

if (environment === "development") {
  new EventSource("esbuild").addEventListener("change", () => {
    window.location.reload();
  });
}
