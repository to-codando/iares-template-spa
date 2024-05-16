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
    title=${props.title}
    body=${html`<p>Essa é a página home</p>`}
  />
`;

export const HomePageUi = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  home-page-ui {
    display: flex;
    width: 100%;
  }
`;
