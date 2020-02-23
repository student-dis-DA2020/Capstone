import { combineReducers } from 'redux';
import students from './studentsReducer';

//area to combine all the reducers
//and have it as just one big object
export default combineReducers({
    data: students
});