import { css, html } from "iares";
import {
  PageLayout,
  PageLayoutTitle,
  PageLayoutContent,
} from "@/components/layouts";

type Props = {
  title: string;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => html`
  <${PageLayout}>
    <slot target="pageLayout" ctx="default-page">
      <div class="wrap-ctx">
        <${PageLayoutTitle} title=${props.title} />
        <${PageLayoutContent}>
          <p class="message-ctx">Página não encontrada</p>
        </>
        
      </div>
    </slot>
  </>
`;

export const DefaultPage = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  default-page,
  .wrap-ctx {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .message-ctx {
    display: flex;
    width: 100%;
  }
`;
