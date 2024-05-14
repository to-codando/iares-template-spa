import { FamIcon } from "fam-code-ui";
import { css, html } from "iares";

type Props = {
  label: string;
  icon: string;
  route?: string;
  highlight?: boolean;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => html`
  <a href="#/${props?.route}" class="link-ctx">
    <${FamIcon}
      name=${props.icon}
 
    />
    <span>${props.label}</span>
  </a>
`;

export const MenuLinkUi = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = ({ props }: Params) => css`
  menu-link-ui {
    display:flex;
    flex-wrap:wrap;
    border-bottom: 1px #0084FF solid;
    transition: ease-in 0.2s;
  }

  menu-link-ui[id="ctx"] {
    background: ${props?.highlight ? "#1E92FF" : "#0A89FF"};
  }

  menu-link-ui[id="ctx"]:hover {
    background:#1E92FF;
  }

  .link-ctx {
    display:grid;
    grid-template-columns: 48px 1fr;
    grid-template-rows: 1fr;

    width:100%;
    padding:1em;
    color:#fff;
    font-size: 1em;
  }

  .link-ctx > span {
    display:flex;
    width:100%;
    align-items:center;
  }
`;
