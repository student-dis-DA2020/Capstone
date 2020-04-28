import axios from 'axios';

import API from '../config/environment'


var temp;

export const getById = async (id) => {
    console.log('I sent '+id)
    // const response = await fetch(API.BASE_URL + API.ALL_STUDENTS + "/" + id)
    // const {data} = await response.json()
    // return data

    // const options = {
    //     method: "GET",
    // }
    // const request = new Request(API.BASE_URL + API.ALL_STUDENTS + "/" + id);
    // const response = await fetch(request);
    // return response.json();
    
    // axios.get(API.BASE_URL + API.ALL_STUDENTS + "/" + id)
    // .then(res => {
    //     temp = res.data;
        
    //   })
    //   console.log(API.BASE_URL + API.ALL_STUDENTS + "/" + id)
    fetch(API.BASE_URL + API.ALL_STUDENTS + "/" + id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });

}