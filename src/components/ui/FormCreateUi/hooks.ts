import type { Actions } from "./types";

type Hooks = {
        beforeMount: (element: HTMLElement) => void;
};

export const createHooks = (actions: Actions): Hooks => {
  const beforeMount = (element: HTMLElement) => {
    actions.subscribe("show-charging-station-form", () => actions.showForm(element))
  };

  return {
    beforeMount,
  };
};
