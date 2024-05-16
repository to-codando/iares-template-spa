import { css, html, createState } from "iares";
import { MainPageLayout } from "../layouts/Main";
import { CardUi } from "@/components/CardUi";
import {
  type CardData,
  type CardValue,
  type Actions,
  createActions,
} from "./actions";

type Props = {
  title: string;
};

type Params = {
  props: Props;
  actions: Actions;
  state: CardData;
};

const template = ({ props, state, actions }: Params) => html`
  <${MainPageLayout}
    title=${props.title}
    body=${actions.repeat(
      state,
      (value: CardValue) => html`<${CardUi} data=${value} />`,
    )}
  />
`;

export const StationsPage = ({ props }: Params) => {
  const state = createState<CardData>({
    data: [
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
      {
        description: "Card do sistema visível no app em colunas",
      },
    ],
  });

  const actions = createActions();

  return {
    template,
    styles,
    state,
    actions,
  };
};

const styles = () => css`
  home-page-ui {
    display: flex;
    width: 100%;
  }
`;
