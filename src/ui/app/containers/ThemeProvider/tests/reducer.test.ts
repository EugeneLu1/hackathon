import produce from 'immer';
import themeProviderReducer, { initialState } from '../reducer';
import { toggleDarkMode } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('themeProviderReducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it.each([['light', 'dark'], ['dark', 'light']])(
    'should toggle between light and dark',
    (current, expected) => {
      state.palette.type = current;
      const expectedResult = produce(state, draft => {
        draft.palette.type = expected;
      });
      expect(themeProviderReducer(state, toggleDarkMode())).toEqual(
        expectedResult,
      );
    },
  );
});
