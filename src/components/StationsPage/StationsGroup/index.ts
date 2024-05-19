import { CardUi } from "@/components/ui/CardUi";
import { css, html } from "iares";

type Value = {
  text: string;
  id: number;
};

type Props = {
  values: Value[];
};

type Params = {
  props: Props;
};

const template = ({ props }: Params) => html`
  <div class="grid-ctx">
    ${props.values.map((value) => html`<${CardUi} data=${value} />`)}
  </div>
`;

export const StationsGroup = ({ props }: Params) => {
  return {
    template,
    styles,
    props,
  };
};

const styles = () => css`
  stations-group {
    display: flex;
    width: 100%;
  }

  .grid-ctx {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.8em 1em;
    width: 100%;
  }
`;
