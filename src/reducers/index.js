import {combineReducers} from 'redux';
import courses from './course.reducers';

const rootReducers = combineReducers({
  courses
});

export default rootReducers;
