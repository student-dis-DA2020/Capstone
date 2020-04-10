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

}

export default BusLineService;