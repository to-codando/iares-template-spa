import {html, css} from "iares";
import {AvatarUi} from "./AvatarUi";
import {MenuLinkUi} from "./MenuLinkUi";
import {LogoutUi} from "./LogoutUi";

const template = () => html`
  <div class="avatar-ctx">
    <slot> <${AvatarUi} /></slot>
  </div>
  <div class="links-ctx">
    <${MenuLinkUi} icon="newsstand" label="Estações" route="stations" />
    <${MenuLinkUi} icon="account_box" label="Perfil" route="profile" />
    <${MenuLinkUi} icon="tune" label="Configurações" route="settings" />
  </div>
  <div class="logout-ctx">
    <${LogoutUi} />
  </div>
`;

export const SidebarUi = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  sidebar-ui {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr 75px;
    grid-template-areas: "avatar" "links" "logout";
    width: 100%;
    height: 100%;
    background: #0084ff;
  }

  .avatar-ctx,
  .logout-ctx {
    padding: 0 1em;
  }

  .avatar-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    grid-area: avatar;
    background: #006bcf;
  }

  .links-ctx {
    grid-area: links;
  }

  .logout-ctx {
    grid-area: logout;
  }
`;
