import { observable, runInAction, decorate, action, computed } from 'mobx';
import CarLineQueueService from '../services/CarLineQueueService';

class CarLineStore {
constructor(){
    this.carLineQueueService = new CarLineQueueService();
}
    carLineData = {
        cars: []
    };
    status = "initial";
    loading = true;
    maxPosition = -1;

    getCarLineQueueAsync = async () => {
        try {
            this.loading = true;
            const data = await this.carLineQueueService.getAll();
            runInAction(() => {
                //sort by position in queue
                this.carLineData.cars = data;
                let sortedArr = data.sort(
                    (a, b) => (a.position > b.position) ? 1 : -1
                );
                this.maxPosition = sortedArr[sortedArr.length - 1].position
                this.loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    addCarAsync = async (id, position) => {
        try {
            this.loading = true;
            const response = await this.carLineQueueService.postWithPosition(id, position);
            runInAction(() => {
                this.status = "success";
                this.loading = false;
                this.getCarLineQueueAsync();
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }

    };

    deleteCarAsync = async (id) => {
        try {
            this.loading = true;
            const response = await this.carLineQueueService.delete(id)
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "success";
                    this.loading = false;
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
}

decorate(CarLineStore, {
    carLineData: observable,
    status: observable,
    loading: observable,
    maxPosition: observable,
    getCarLineQueueAsync: action,
    addCarAsync: action,
    deleteCarAsync: action,
});

export default new CarLineStore();