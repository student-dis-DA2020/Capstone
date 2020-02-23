import {fetchStudentsPending, fetchStudentsError, fetchStudentsSuccess} from './actions/index';


//URL address used to fetch/call the server on heroku to fetch jobs
const API_URL = 'http://ancient-bayou-94629.herokuapp.com/all';


//function used to call and fetch the jobs data from the server
export const fetchstudentData =  () => {
    return async (dispatch) => {
      try{
        dispatch(fetchStudentsPending())
        const response = await fetch(API_URL);
        const responseJson = await response.json();
        if(responseJson.message !== undefined){
          
          throw(responseJson.message)
        }

        console.log('fetching successfull')
        dispatch(fetchStudentsSuccess(responseJson))
      }catch(error){
        //console.log(error);
        dispatch(fetchStudentsError(error))
      }
    }
}