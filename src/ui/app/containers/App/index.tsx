import React, { Fragment, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { SurveyTable } from './Table';

import { injectReducer, injectSaga } from 'redux-injectors';
import reducer from './reducer';
import saga from './saga';
import { SortType } from './constants';
import { getSurveys, sortSurveys } from './actions';
import makeSelectApp from './selectors';

// Remove the HashRouter if we eventually host this project on it's own (not embedded)
export const App = ({ app, onLoadGetSurveys, onClickSort }) => {
  const { surveys, error, order, orderBy } = app;
  useEffect(() => onLoadGetSurveys(), []);
  if (error) {
    console.log('unexpected error');
  }
  return (
    <Fragment>
      <SurveyTable
        surveys={surveys}
        order={order}
        orderBy={orderBy}
        onClickSort={onClickSort}
      />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadGetSurveys: () => {
      dispatch(getSurveys());
    },
    onClickSort: (columnKey: any, columnType: SortType) => {
      dispatch(sortSurveys(columnKey, columnType));
    },
  };
}
export default compose(
  injectReducer({ key: 'app', reducer }),
  injectSaga({ key: 'app', saga }),
  connect(mapStateToProps, mapDispatchToProps),
)(injectIntl(App));
