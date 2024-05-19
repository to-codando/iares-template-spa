import type { Actions, CardData, CardElement } from "./types";

export const createActions = (): Actions => {
  const repeat = ({ data }: CardData, element: CardElement) => {
    return data.flatMap((value) => element(value));
  };

  return {
    repeat,
  };
};
