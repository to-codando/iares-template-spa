import { FamButton } from "fam-code-ui";
import { css, html } from "iares";

const template = () => html`
  <${FamButton}>
    <slot target="content">
      <span type="primary">
        <i>Sair</i>
      </span>
    </slot>
  </>
`;

export const LogoutUi = () => {
  return { template, styles };
};

const styles = () => css`
  logout-ui {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    border-radius: 8px;
  }

  logout-ui:hover fam-button {
   filter: brightness(110%);
  }
`;
