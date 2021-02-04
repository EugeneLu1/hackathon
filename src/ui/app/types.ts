import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { SortOrder } from "./constants";

export interface ContainerState {
  surveys: any[];
  error: boolean;
  order: SortOrder;
  orderBy: any;
}

export type ContainerActions = ActionType<typeof actions>;
