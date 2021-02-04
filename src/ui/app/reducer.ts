/* eslint-disable default-case, no-case-declarations, no-param-reassign */
import produce from "immer";
import ActionTypes, { SortOrder, SortType } from "./constants";
import { ContainerState, ContainerActions } from "./types";

export const initialState: ContainerState = {
  surveys: [],
  error: false,
  order: SortOrder.ORDER_ASC,
  orderBy: "id",
};

const sortSurveys = (
  surveys: any[],
  key: any,
  type: SortType,
  order: SortOrder
) =>
  surveys.sort((a, b) => {
    const aKey = a[key];

    const bKey = b[key];
    let result: number;

    switch (type) {
      case SortType.NUMBER_SORT_TYPE:
        result = bKey < aKey ? 1 : -1;
        break;
      case SortType.TEXT_SORT_TYPE:
      default:
        if (aKey === "" || aKey === null) {
          return 1;
        }
        if (bKey === "" || bKey === null) {
          return -1;
        }
        result = aKey.localeCompare(bKey);
        break;
    }
    if (order === SortOrder.ORDER_DESC) return -result;
    return result;
  });

/* eslint-disable default-case, no-param-reassign */
const appReducer = (
  state: ContainerState = initialState,
  action: ContainerActions
) =>
  produce(state, (draft: ContainerState) => {
    switch (action.type) {
      case ActionTypes.GET_SURVEYS:
        break;
      case ActionTypes.GET_SURVEYS_SUCCESS:
        Object.assign(draft, {
          surveys: action.payload.surveys,
          error: false,
          order: initialState.order,
          orderBy: initialState.orderBy,
        });
        sortSurveys(
          draft.surveys,
          draft.orderBy,
          SortType.TEXT_SORT_TYPE,
          draft.order
        );
        break;
      case ActionTypes.GET_SURVEYS_FAILURE:
        Object.assign(draft, {
          error: true,
        });
        break;
      case ActionTypes.SORT_SURVEYS:
        const orderBy = action.payload.key;
        const order =
          draft.orderBy === orderBy && draft.order === SortOrder.ORDER_ASC
            ? SortOrder.ORDER_DESC
            : SortOrder.ORDER_ASC;
        const surveys = sortSurveys(
          draft.surveys,
          orderBy,
          action.payload.sortType,
          order
        );
        Object.assign(draft, { order, orderBy, surveys });
        break;
    }
  });

export default appReducer;
