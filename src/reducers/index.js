import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorsReducer';
import ajaxCallsInprogress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInprogress
});

export default rootReducer;
