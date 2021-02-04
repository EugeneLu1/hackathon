import produce from 'immer';
import { ActionTypes, Palette } from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  palette: {
    type: 'light',
    primary: {
      main: Palette.PRIMARY_COLOR,
      dark: Palette.PRIMARY_CONTRAST_HOVER_COLOR,
    },
    yellow: {
      main: Palette.YELLOW_COLOR,
      contrastText: Palette.YELLOW_CONTRAST_COLOR,
      light: Palette.YELLOW_HOVER_COLOR,
      dark: Palette.YELLOW_CONTRAST_HOVER_COLOR,
    },
    green: {
      main: Palette.GREEN_COLOR,
      contrastText: Palette.GREEN_CONTRAST_COLOR,
      light: Palette.GREEN_HOVER_COLOR,
      dark: Palette.GREEN_CONTRAST_HOVER_COLOR,
    },
    grey: {
      main: Palette.GREY_COLOR,
      contrastText: Palette.GREY_CONTRAST_COLOR,
      light: Palette.GREY_HOVER_COLOR,
      dark: Palette.GREY_CONTRAST_HOVER_COLOR,
    },
    blue: {
      main: Palette.BLUE_COLOR,
      contrastText: Palette.BLUE_CONTRAST_COLOR,
    },
    orange: {
      main: Palette.ORANGE_COLOR,
      contrastText: Palette.ORANGE_CONTRAST_COLOR,
    },
    red: {
      main: Palette.RED_COLOR,
      contrastText: Palette.RED_CONTRAST_COLOR,
    },
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'inherit',
        '&:hover': {
          color: 'inherit',
          backgroundColor: 'inherit',
        },
        '&$focused': {
          color: 'inherit',
          backgroundColor: 'inherit',
        },
      },
    },
  },
};

/* eslint-disable default-case, no-param-reassign */
const themeProviderReducer = (
  state: ContainerState = initialState,
  action: ContainerActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.TOGGLE_DARK_MODE:
        draft.palette.type = draft.palette.type === 'light' ? 'dark' : 'light';
        break;
    }
  });

export default themeProviderReducer;
