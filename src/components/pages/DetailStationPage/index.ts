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
          <p class="message-ctx">Confira aqui os detalhes da estação</p>
        </>
        
      </div>
    </slot>
  </>
`;

export const DetailStationPage = ({ props }: Params) => {
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
