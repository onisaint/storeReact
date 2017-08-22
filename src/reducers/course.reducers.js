import * as Types from "../actions/actionTypes";

export default function courseReducers(state = [], action) {
  switch (action.type) {
    case Types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

