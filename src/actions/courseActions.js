import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(course => {
      dispatch(loadCoursesSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
