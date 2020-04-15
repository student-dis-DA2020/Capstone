import API from '../config/environment'


class API_query {
    
    getAll = async () => {
        const options = {
            method: "GET",
        }
     const request = new Request(API.BASE_URL + API.ALL_STUDENTS);
     const response = await fetch(request);
     return response.json();
    }

    postStudent = async (id) => {
        var options = {
            method: "POST",
        }
        const request = new Request(API.BASE_URL + API.ALL_STUDENTS + "/" + id, options);
        const response = await fetch(request);
        return response;
    }

    // deleteCarAsync = async (id) => {
    //     try {
    //         const response = await this.carLineQueueService.delete(id)
    //         runInAction(() => {
    //             this.status = "success";
    //             this.loading = false;
    //             this.updateQueueAsync();
    //         })
    //     } catch (error) {
    //         runInAction(() => {
    //             this.status = "error";
    //         });
    //     }
    // };

}

export default API_query;