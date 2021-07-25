import {
  UPDATE_POMODORO_SETTINGS,
} from "../types";

// Takes type enum form props and switches between them and enacts the update to state by payload
export default (state, action) => {
  switch (action.type) {
    case UPDATE_POMODORO_SETTINGS:
      return {
        ...state,
        pomodoroSettings: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
