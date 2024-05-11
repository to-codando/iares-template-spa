import { html, css } from "iares"
import { AvatarUi } from "./AvatarUi"

const template = () => html`
  <div class="avatar-ctx">
    <${AvatarUi} />
  </div>
  <div class="links-ctx">links</div>
  <div class="logout-ctx">logout</div>
`

export const SidebarUi = () => {
  return {
    template,
    styles
  }
}

const styles = () => css`
  sidebar-ui {
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 1fr 75px;
    grid-template-areas: "avatar" "links" "logout";
    width:100%;
    height:100%;
    background:#0084FF;
  }

  .avatar-ctx,
  .links-ctx,
  .logout-ctx {
    padding:0 1em;
  }

  .avatar-ctx {
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    grid-area: avatar;
    background:#006BCF;
  }

  .links-ctx {
    grid-area: links
  }

  .logout-ctx {
    grid-area: logout
  }
`
