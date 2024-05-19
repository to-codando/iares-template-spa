import { css, html } from "iares";

const template = () => html`
  <div class="layout-content-ctx">
    <slot id="pageLayoutContent"></slot>
  </div>
`;

export const PageLayoutContent = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  page-layout-content,
  .layout-content-ctx {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }
`;
