import type { Actions } from "./types";

type Hooks = {
  beforeRender: (element?: HTMLElement) => void;
  beforeMount: (element?: HTMLElement) => void;
};

export const createHooks = <T>(actions: Actions): Hooks => {
  const beforeRender = () => {
    // actions.subscribe();
  };

  const beforeMount = (element?: HTMLElement) => {
    if (element) actions.subscribe();
  };

  return {
    beforeRender,
    beforeMount,
  };
};
