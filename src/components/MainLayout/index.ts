import { css, html } from "iares";

import { SidebarUi } from "@/components/SidebarUi";
import { HeaderUi } from "../HeaderUi";

const template = () => html`
<div class="sidebar-ctx">
  <${SidebarUi} />
</div>
<div class="header-ctx">
  <${HeaderUi} />
</div>
<div class="content-ctx">
  <router-view></router-view>
</div>
`;

export const MainLayout = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  main-layout {
    display:grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 75px 1fr;
    grid-template-areas: "sidebar header" "sidebar content";
    width: 100%;
  }

  .header-ctx {
    grid-area: header;
  }

  .sidebar-ctx {
    grid-area: sidebar;
  }

  .content-ctx {
    grid-area: content;
  }

  
`;
