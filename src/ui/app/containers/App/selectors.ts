import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectAppDomain = (state) => state.App || initialState;

const makeSelectApp = () =>
  createSelector(selectAppDomain, (substate) => substate);

export default makeSelectApp;
export { selectAppDomain };
