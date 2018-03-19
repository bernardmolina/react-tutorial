import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorSuccess(authors){
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors(){
  return function(dispatch){
    return AuthorApi.getAllAuthors().then(course => {
      dispatch(loadAuthorSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
