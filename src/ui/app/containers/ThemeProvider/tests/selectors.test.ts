import makeSelectThemeProvider, {
  selectThemeProviderDomain,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectThemeProviderDomain', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      themeProvider: globalState,
    };
    expect(selectThemeProviderDomain(mockedState)).toEqual(globalState);
  });

  it('should select the initial state when no themeProvider state found', () => {
    const globalState = {};
    const mockedState = {
      randomState: globalState,
    };
    expect(selectThemeProviderDomain(mockedState)).toBe(initialState);
  });
});

describe('makeSelectThemeProvider', () => {
  const themeProviderSelector = makeSelectThemeProvider();
  it('just selects the whole state right now', () => {
    const theme = 'mxstbr';
    const mockedState = {
      themeProvider: {
        theme,
      },
    };
    expect(themeProviderSelector(mockedState)).toEqual(
      mockedState.themeProvider,
    );
  });
});
