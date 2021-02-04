enum ActionTypes {
  GET_SURVEYS = "app/GET_SURVEYS",
  GET_SURVEYS_SUCCESS = "app/GET_SURVEYS_SUCCESS",
  GET_SURVEYS_FAILURE = "app/GET_SURVEYS_FAILURE",
  SORT_SURVEYS = "app/SORT_SURVEYS",
}

export enum SortType {
  TEXT_SORT_TYPE = "text",
  NUMBER_SORT_TYPE = "number",
}

export enum SortOrder {
  ORDER_ASC = "asc",
  ORDER_DESC = "desc",
}

export default ActionTypes;
