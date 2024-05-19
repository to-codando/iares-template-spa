import { css, html, createState } from "iares";

import type { Stations, Params } from "./types";
import { createActions } from "./actions";

import { StationsGroup } from "@/components/StationsPage/StationsGroup";
import {
  PageLayout,
  PageLayoutTitle,
  PageLayoutContent,
} from "@/components/layouts";

const template = ({ props, state, actions }: Params) => html`

  <${PageLayout}>
    <slot target="pageLayout" ctx="stations-page">
      <div class="wrap-ctx">
        <${PageLayoutTitle} title=${props.title}/>
        <${PageLayoutContent}>
          <${StationsGroup} values=${state.stations} />      
        </>
      </div>
    </slot>
  </> 
`;

export const StationsPage = ({ props }: Params) => {
  const state = createState<Stations>({
    stations: [
      {
        id: 1,
        text: "Estação de recarga 1",
      },
      {
        id: 2,
        text: "Estação de recarga 2",
      },
      {
        id: 3,
        text: "Estação de recarga 3",
      },
      {
        id: 4,
        text: "Estação de recarga 4",
      },
      {
        id: 5,
        text: "Estação de recarga 5",
      },
      {
        id: 6,
        text: "Estação de recarga 6",
      },
      {
        id: 7,
        text: "Estação de recarga 7",
      },
      {
        id: 8,
        text: "Estação de recarga 8",
      },
      {
        id: 9,
        text: "Estação de recarga 9",
      },
      {
        id: 10,
        text: "Estação de recarga 10",
      },
      {
        id: 11,
        text: "Estação de recarga 11",
      },
      {
        id: 12,
        text: "Estação de recarga 12",
      },
      {
        id: 13,
        text: "Estação de recarga 13",
      },
      {
        id: 14,
        text: "Estação de recarga 14",
      },
      {
        id: 15,
        text: "Estação de recarga 15",
      },
      {
        id: 16,
        text: "Estação de recarga 16",
      },
      {
        id: 17,
        text: "Estação de recarga 17",
      },
      {
        id: 18,
        text: "Estação de recarga 18",
      },
      {
        id: 19,
        text: "Estação de recarga 19",
      },
      {
        id: 20,
        text: "Estação de recarga 20",
      },
    ],
  });

  const actions = createActions();

  return {
    template,
    styles,
    state,
    actions,
    props,
  };
};

const styles = () => css`
  home-page-ui,
  .wrap-ctx {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
