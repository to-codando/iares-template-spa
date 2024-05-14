import { FamAvatar } from "fam-code-ui";
import { css, html } from "iares";

const template = () => html`
  <div class="avatar-image-ctx">
    <${FamAvatar}
      src="/assets/images/avatar.png"
      fallbackSrc="/assets/images/404.png"
      size="3"
      alt="avatar"
    />
  </div>

  <div class="avatar-text-ctx">
    <div class="avatar-type-ctx">Admin</div>
    <div class="avatar-name-ctx">Rodrigo Rocha</div>
  </div>
`

export const AvatarUi = () => {
  return {
    template,
    styles
  }
}

const styles = () => css`
  avatar-ui {
    display:grid;
    grid-template-columns: 48px 1fr;
    grid-template-rows: 1em;
    grid-template-areas: "image text";
    width:100%;
    height:100%;
  }

  .avatar-image-ctx,
  .avatar-text-ctx {
    display:flex;
    flex-wrap: wrap;
    width:100%;
    height: 75px;
  }

  .avatar-image-ctx {
    grid-area: image
  }

 .avatar-text-ctx {
    display:flex;
    flex-wrap: wrap;
    grid-area: text;
  }

  .avatar-type-ctx,
  .avatar-name-ctx {
    display:flex;
    width:100%;
    padding-left: 1em;
  }

  .avatar-name-ctx {
    align-items: flex-start;
    color:#FFF;
  }

  .avatar-type-ctx {
    align-items: flex-end;
    font-size: 0.8em;
    padding-left:1.25em;
    color:#C7E4FF
  }

`
