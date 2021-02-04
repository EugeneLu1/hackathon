import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the themeProvider state domain
 */

const selectThemeProviderDomain = state => state.themeProvider || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ThemeProvider
 */

const makeSelectThemeProvider = () =>
  createSelector(
    selectThemeProviderDomain,
    substate => substate,
  );

export default makeSelectThemeProvider;
export { selectThemeProviderDomain };
