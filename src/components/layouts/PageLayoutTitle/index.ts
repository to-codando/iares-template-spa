import { FamContainer, FamTitle } from "fam-code-ui";
import { css, html } from "iares";

type Props = {
  title: string;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => html`
  <div class="wrap-ctx">
    <${FamTitle}>
      <slot target="content">
        <h1> > ${props.title} </h1>
      </slot>
    </> 
  </div>
`;

export const PageLayoutTitle = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  page-layout-title,
  .wrap-ctx {
    display: flex;
    width: 100%;
  }

  .wrap-ctx {
    padding: 2em 0;
  }
`;
