import { FamTextInput } from "fam-code-ui";
import { css, html } from "iares";

const template = () => html`
  <${FamTextInput}
    type="text"
    label=""
    handler=${() => console.log("ok")}
    value="Juan Valdez"
    debounceTime="500"
  />
`;

export const SearchUi = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  search-ui {
    display: flex;
    width: 100%;
  }

  search-ui input {
    background: #118cff !important;
    border-color: #2797ff !important;
    color: #fff !important;
  }

  search-ui input:focus {
    outline-color: #0078e7 !important;
  }
`;
