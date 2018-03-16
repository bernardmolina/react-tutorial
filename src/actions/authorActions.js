import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadAuthorSuccess(courses){
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    courses
  };
}

export function loadAuthors(){
  return function(dispatch){
    return courseApi.getAllCourses().then(course => {
      dispatch(loadAuthorSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
