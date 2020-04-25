import API from '../config/environment'

class CarLineQueueService {
    
    getAll = async () => {
        const options = {
            method: "GET",
        }
     const request = new Request(API.BASE_URL + API.CARLINE, options);
     const response = await fetch(request);
     return response.json();
    }

    postWithPosition = async (id, position) => {
        var options = {
            method: "POST",
        }
        const request = new Request(API.BASE_URL + API.CARLINE + "/" + id + "/" + position, options);
        const response = await fetch(request);
        return response;
    }

    delete = async (id) => {
        const options = {
            method: "DELETE",
        }
        const request = new Request(API.BASE_URL + API.CARLINE + "/" + id, options);
        const response = await fetch(request);
        return response;
    }

    changeWaitingStatus = async (id) => {
        const options = {
            method: "PUT",
        }
        const request = new Request(API.BASE_URL + API.CARLINE + "/" + id + "/changewaiting", options);
        const response = await fetch(request);
        return response;
    }

    sendNotificationEmail = async (id) => {
        const options = {
            method: "PUT",
        }
        const request = new Request(API.BASE_URL + API.EMAIL + "/" + id, options);
        const response = await fetch(request);
        return response;
    }
    
    dismissById = async (id) => {
        const options = {
            method: "POST",
        }
     const request = new Request(API.BASE_URL + API.DISMISS + "/" + id, options);
     console.log(request);
     const response = await fetch(request);
     return response.json();
    }

}

export default CarLineQueueService;