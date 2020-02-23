import {FETCH_STUDENTS_PENDING, FETCH_STUDENTS_ERROR, FETCH_STUDENTS_SUCCESS } from './types';


//redux actions
export const fetchStudentsPending = () => {
  return {
    type: FETCH_STUDENTS_PENDING
  }
};

export const fetchStudentsError = (error) => {
  return {
    type: FETCH_STUDENTS_ERROR,
    error:error
  }
};

export const fetchStudentsSuccess = (data) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    students:data
  }
}