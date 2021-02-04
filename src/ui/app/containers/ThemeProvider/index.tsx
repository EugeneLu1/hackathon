import React, { Children } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { ThemeProvider, ThemeOptions } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';

import makeSelectThemeProvider from './selectors';

export function ThemeProviderWrapper({
  theme,
  children,
}: {
  theme?: ThemeOptions;
  children: any;
}) {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      {Children.only(children)}
    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  theme: makeSelectThemeProvider(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ThemeProviderWrapper);
