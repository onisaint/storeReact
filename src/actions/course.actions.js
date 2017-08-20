export function createCourse(course) {
  return {
    type: 'CREATE_COURSE',
    payload: course
  };
}
