import { createState } from "iares";
import { createActions } from "./actions";
import type { StoreType } from "./types";

const store = createState<StoreType>({
  menuIsVisible: false,
});

const actions = createActions(store);

export { store, actions };
