import {fetchPending, fetchError, fetchSuccess} from './actions/index';


//URL address used to fetch/call the server on heroku to fetch jobs
const BASE_URL = 'http://ancient-bayou-94629.herokuapp.com';
const ALL_ENDPOINT = '/all';
const CARLINE_ENDPOINT = '/line';


//function used to call and fetch all student data from the server
export const fetchAllStudents =  () => {
    return async (dispatch) => {
      try{
        dispatch(fetchPending())
        const response = await fetch(BASE_URL + ALL_ENDPOINT);
        const responseJson = await response.json();
        if(responseJson.message !== undefined){
          
          throw(responseJson.message)
        }

        console.log('fetching successfull')
        dispatch(fetchSuccess(responseJson))
      }catch(error){
        dispatch(fetchError(error))
      }
    }
}

//get a student by id
export const fetchStudentById =  (id) => {
    return async (dispatch) => {
      try{
        dispatch(fetchPending())
        const response = await fetch(BASE_URL + ALL_ENDPOINT + '/' + id);
        const responseJson = await response.json();
        if(responseJson.message !== undefined){
          
          throw(responseJson.message)
        }

        console.log('fetching successfull')
        dispatch(fetchSuccess(responseJson))
      }catch(error){
        dispatch(fetchError(error))
      }
    }
}

export const fetchByTeacher = (teacherName) => {
    return async (dispatch) => {
      try{
        dispatch(fetchPending())
        const response = await fetch(BASE_URL + ALL_ENDPOINT + '/searchByTeacher?teacher=' + teacherName);
        const responseJson = await response.json();
        console.log(responseJson); 
        if(responseJson.message !== undefined){
          
          throw(responseJson.message)
        }

        console.log('fetching successfull')
        dispatch(fetchSuccess(responseJson))
      }catch(error){
        dispatch(fetchError(error))
      }
    }
}

//gets list of all cars currently in the queue
export const fetchQueue =  () => {
    return async (dispatch) => {
      try{
        dispatch(fetchPending())
        const response = await fetch(BASE_URL + CARLINE_ENDPOINT);
        const responseJson = await response.json();
        if(responseJson.message !== undefined){
          
          throw(responseJson.message)
        }

        console.log('fetching successfull')
        dispatch(fetchSuccess(responseJson))
      }catch(error){
        dispatch(fetchError(error))
      }
    }
}