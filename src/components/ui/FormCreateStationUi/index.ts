import { FamButton, FamTextInput } from "fam-code-ui";
import { createState, css, html } from "iares";
import { createActions } from "./actions";
import type { Params } from "./types";
import { createHooks } from "./hooks";

const template = ({ props, state, actions }: Params) => html`
<div class="wrap-ctx">
  <div class="grid grid-cols-12">
    <div class="xxl-col-12">
      <${FamTextInput}  
        type="text"
        label="Nova estação"
        handler=${props?.onChange?.()}
        value=${state.value}
        debounceTime="500"
      />
    </div>
    <div class="xxl-col-6">
      <${FamButton}>
        <slot target="content">
        <span type="secondary-hole-disabled" onClick=${props?.onCancel?.()}>
          <i>Cancelar</i>
        </span>
        </slot>
      </>
    </div>
    <div class="xxl-col-6">
      <${FamButton}>
        <slot target="content">
          <span type="primary" onClick=${(event: MouseEvent) => props?.onSave?.(event)}>
            <i>Salvar</i>
          </span>
        </slot>
      </>
    </div>
  </div>
</div>
`;

export const FormCreateStationUi = ({ props }: Params) => {
  const state = createState({
    value: props?.inputValue || "",
    show: true,
  });

  const actions = createActions(state, props);
  const hooks = createHooks(actions);

  return {
    template,
    styles,
    state,
    props,
    actions,
    hooks,
  };
};

const styles = () => css`
  form-create-station-ui {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    transition: ease-in 2s;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
  }

  form-create-station-ui.show {
    opacity: 1;
    z-index: 100;
  }
  .wrap-ctx {
    display: flex;
    align-items: flex-start;
    max-width: 480px;
    padding: 3em 1em 0 1em;
    background: #e1f0ff;
  }
`;
