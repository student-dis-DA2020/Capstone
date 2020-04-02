import { observable, runInAction, decorate, action } from 'mobx';
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

    getCarLineQueueAsync = async () => {
        try {
            this.loading = true;
            const data = await this.carLineQueueService.getAll();
            runInAction(() => {
                this.carLineData.cars = data;
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
            if (response.status === 201) {
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
    getCarLineQueueAsync: action,
    addCarAsync: action,
    deleteCarAsync: action
});

export default new CarLineStore();