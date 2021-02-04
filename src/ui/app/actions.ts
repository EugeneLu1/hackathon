import { action } from "typesafe-actions";
import ActionTypes, { SortType } from "./constants";

export const getSurveys = () => action(ActionTypes.GET_SURVEYS);

export const getSurveysSuccess = (surveys: any[]) =>
  action(ActionTypes.GET_SURVEYS_SUCCESS, { surveys });

export const getSurveysFailure = () => action(ActionTypes.GET_SURVEYS_FAILURE);

export const sortSurveys = (key: String, sortType: SortType) =>
  action(ActionTypes.SORT_SURVEYS, { key, sortType });
