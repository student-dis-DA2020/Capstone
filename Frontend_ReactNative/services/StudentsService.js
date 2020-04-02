import API from '../config/environment'

class StudentsService {
    
    getAll = async () => {
        const options = {
            method: "GET",
        }
     const request = new Request(API.BASE_URL + API.ALL_STUDENTS);
     const response = await fetch(request);
     return response.json();
    }

    getById = async (id) => {
        const options = {
            method: "GET",
        }
     const request = new Request(API.BASE_URL + API.ALL_STUDENTS + "/" + id);
     const response = await fetch(request);
     return response.json();
    }

    getByTeacher = async (teacher) => {
        const options = {
            method: "GET",
        }
     const request = new Request(API.BASE_URL + API.ALL_STUDENTS + "/searchByTeacher?teacher=" + teacher);
     const response = await fetch(request);
     return response.json();
    }

}

export default StudentsService;