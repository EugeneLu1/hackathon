import { toggleDarkMode } from '../actions';
import { ActionTypes } from '../constants';

describe('ThemeProvider actions', () => {
  describe('Toggle Dark Mode Action', () => {
    it('has a type of TOGGLE_DARK_MODE', () => {
      const expected = {
        type: ActionTypes.TOGGLE_DARK_MODE,
      };
      expect(toggleDarkMode()).toEqual(expected);
    });
  });
});
