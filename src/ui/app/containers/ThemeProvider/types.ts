import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type ContainerState = {
  palette: {
    type: 'light' | 'dark';
    primary: {
      main: string;
      dark: string;
    };
    yellow: {
      main: string;
      contrastText: string;
      light: string;
      dark: string;
    };
    green: {
      main: string;
      contrastText: string;
      light: string;
      dark: string;
    };
    grey: {
      main: string;
      contrastText: string;
      light: string;
      dark: string;
    };
    red: {
      main: string;
      contrastText: string;
    };
    orange: {
      main: string;
      contrastText: string;
    };
    blue: {
      main: string;
      contrastText: string;
    };
  };
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: string;
        '&:hover': {
          color: string;
          backgroundColor: string;
        };
        '&$focused': {
          color: string;
          backgroundColor: string;
        };
      };
    };
  };
};

export type ContainerActions = ActionType<typeof actions>;
