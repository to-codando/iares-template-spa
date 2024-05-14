import { FamButton, FamIcon } from "fam-code-ui";
import { css, html } from "iares";

type Handler = {
  handler: () => void;
};

type Props = {
  icon: string;
  label: string;
  handler?: Handler;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => html`
  <${FamButton}>
    <slot target="content">
      <span type="primary-hole">
        <${FamIcon} name="${props.icon ?? "question_mark"}"/>
      </span>
    </slot>
  </>
`;

export const ButtonUi = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  button-ui {
    display: flex;
    width: 100%;
  }
`;
