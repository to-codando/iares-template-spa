import { css, html } from "iares";
import { MainPageLayout } from "../layouts/Main";

type Props = {
  title: string;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => html`
  <${MainPageLayout}
    title="404"
    body=${html`<p><strong>404</strong> - Página não encontrata</p>`}
  />
`;

export const DefaultPage = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  default-page {
    display: flex;
    width: 100%;
  }
`;
