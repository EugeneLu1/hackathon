import React from 'react';
import { render } from '@testing-library/react';
import { browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProviderWrapper, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<ThemeProvider />', () => {
  let store;
  const children = <h1>Test</h1>;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('dispatch should be returned', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.dispatch).toBeDefined();
    });
  });
});
