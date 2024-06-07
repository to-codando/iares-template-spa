import { css, html } from 'iares';
import { FamButton, FamIcon } from 'fam-code-ui';
import { createActions } from './actions';
import type { Params } from './types';

const template = ({ props, actions }: Params) => html`
  <${FamButton}>
    <slot target="content">
      <span
        type="primary-hole"
        onClick=${(event: MouseEvent) =>
          actions.emit<MouseEvent>(props.eventName, event)}
      >
        <${FamIcon} name=${props.icon ?? 'question_mark'} />
      </span>
    </slot>
  <//>
`;

export const ButtonUi = ({ props }: Params) => {
  const actions = createActions(props.emitter);
  return {
    template,
    styles,
    props,
    actions,
  };
};

const styles = () => css`
  button-ui {
    display: flex;
    width: 100%;
  }
  .test {
    background: red;
  }
`;
