import type { HTMType } from "iares";

export type Station = {
  text: string;
  id: number;
};

export type Stations = { stations: Station[] };

export type CardElement = (value: Station) => HTMType | HTMType[];

export type Actions = {
  repeat: (data: Stations, element: CardElement) => HTMType | HTMType[];
};

export type Props = {
  title: string;
};

export type Params = {
  props: Props;
  actions: Actions;
  state: Stations;
};
