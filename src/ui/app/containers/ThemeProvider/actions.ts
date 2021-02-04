import { ActionTypes } from './constants';
import { action } from 'typesafe-actions';

export const toggleDarkMode = () => action(ActionTypes.TOGGLE_DARK_MODE);
