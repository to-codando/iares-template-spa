import { FamIcon } from "fam-code-ui";
import { css, html } from "iares";

type CardValue = {
  text: string;
  id: number;
};

type Props = {
  data: CardValue;
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => {
  return html`
    <div class="wrap-ctx">
      <p>${props.data.text}</p>
      <ul>
        <li>
          <${FamIcon} name="group" size="1" />
          <p>1</p>
        </li>
        <li>
          <${FamIcon} name="playlist_play" size="1" />
          <p>3</p>
        </li>
        <li>
          <${FamIcon} name="playlist_add_check" size="1" />
          <p>5</p>
        </li>
        <li>
          <${FamIcon} name="subject" size="1" />
          <p>2</p>
        </li>
      </ul>
    </div>
  `;
};

export const CardUi = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  card-ui {
    display: flex;
    width: 100%;
    padding: 2em;
    border: 1px #f4faff solid;
    border-radius: 8px;
    background: #edf6ff;
    color: #96a2c3;
    box-shadow: 0 0 5px rgba(145, 180, 209, 0.1);
  }

  .wrap-ctx {
    flex-wrap: wrap;
  }

  .wrap-ctx,
  .wrap-ctx > p {
    display: flex;
    width: 100%;
  }

  .wrap-ctx > p {
    padding-bottom: 1.2em;
    margin-bottom: 1.2em;
    border-bottom: 1px #d3deff solid;
    font-weight: 500;
    line-height: 1.3em;
  }

  .wrap-ctx > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    width: 100%;

    color: ##8590ae;
    font-size: 1.3em;
  }

  .wrap-ctx > ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wrap-ctx li > p {
    display: flex;
    justify-content: flex-start;
    font-size: 0.65em;
    font-weight: 500;
    width: 100%;
    padding-left: 0.5em;
  }
`;
