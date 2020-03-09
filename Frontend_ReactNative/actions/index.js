import {FETCH_PENDING, FETCH_ERROR, FETCH_SUCCESS } from './types';


//redux actions
export const fetchPending = () => {
  return {
    type: FETCH_PENDING
  }
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    error:error
  }
};

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    data:data
  }
}