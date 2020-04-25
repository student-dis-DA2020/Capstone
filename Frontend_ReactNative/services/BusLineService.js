import API from '../config/environment'

class BusLineService {
    getAll = async () => {
        const options = {
            method: "GET",
        }
     const request = new Request(API.BASE_URL + API.BUS_LINE, options);
     const response = await fetch(request);
    
     return response.json();
    }
    
    changeDismissStatus = async (id) => {
        const options = {
            method: "PUT",
        }

        //TODO: finish after adding functionality in backend
        //const request = new Request(API.BASE_URL + API.DISMISS + "/" + id, options);
        //const response = await fetch(request);
        //return response;
    }

    changeWaitingStatus = async (id) => {
        const options = {
            method: "PUT",
        }
        //const request = new Request(API.BASE_URL + API.CARLINE + "/" + id + "/changewaiting", options);
        //const response = await fetch(request);
        //return response;
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
     const response = await fetch(request);
     return response.json();
    }
}

export default BusLineService;