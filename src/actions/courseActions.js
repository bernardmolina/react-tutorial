import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course){
  return {
    type: types.CREATE_COURSE,
    course
  };
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(course => {
      dispatch(loadCoursesSuccess(course));
    }).catch(error => {
      throw(error);
    })
  };
}
