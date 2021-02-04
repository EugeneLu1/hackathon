import { put, takeEvery, call } from "redux-saga/effects";

import ActionTypes from "./constants";
import { getSurveysSuccess, getSurveysFailure } from "./actions";

export function* getSurveys() {
  try {
    const surveys = yield call(fetch, "urlstub");
    yield put(getSurveysSuccess(surveys));
  } catch (err) {
    yield put(getSurveysFailure());
  }
}

export default function* rootSaga() {
  yield takeEvery(ActionTypes.GET_SURVEYS, getSurveys);
}
