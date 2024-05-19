import { css, html } from "iares";
type Props = {
  title: string;
  body: string;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => {
  return html`
    <div class="page-container-ctx">
      <slot id="pageLayout"></slot>
    </div>
  `;
};

export const PageLayout = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  page-layout {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-height: 888px;
    padding-bottom: 2em;
    overflow: hidden;
    overflow-y: scroll;
  }

  .page-container-ctx {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto 2em auto;
    position: relative;
  }
`;
