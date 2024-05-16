import type { HTMType } from "iares";

export type CardValue = {
  description: string;
};

export type CardData = { data: CardValue[] };

type CardElement = (value: CardValue) => HTMType | HTMType[];

export type Actions = {
  repeat: (data: CardData, element: CardElement) => HTMType | HTMType[];
};

export const createActions = (): Actions => {
  const repeat = ({ data }: CardData, element: CardElement) => {
    return data.map((value) => element(value));
  };

  return {
    repeat,
  };
};
