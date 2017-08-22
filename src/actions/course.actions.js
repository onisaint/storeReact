import * as Types from "./actionTypes";
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: Types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw err;
      });
  };
}
