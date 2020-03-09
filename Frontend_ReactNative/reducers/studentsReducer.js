import {FETCH_PENDING,FETCH_ERROR,FETCH_SUCCESS } from '../actions/types';

//Object for the Jobs state
const initialState = {
  pending: false,
  students: [],
  error: "no errors"
}

export default function studentReducer(state = initialState, action) {  
  
  switch (action.type) {
      case FETCH_ERROR:
        return {
          ...state,
          pending: false,
          error:  action.error
        }
      case FETCH_PENDING:
        return {
          ...state,
          pending: true
        }
      case FETCH_SUCCESS:
        return{
          ...state,
          pending: false,
          students: action.students
        }
      default:
        return state;
  }
}