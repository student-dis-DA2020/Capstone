import { observable, runInAction, decorate } from 'mobx';
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
            const data = await this.carLineQueueService.getAll();
            runInAction(() => {
                this.carLineData.cars = data;
                loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    addCarAsync = async (id, position) => {
        try {
            const response = await this.carLineQueueService.postWithPosition(id, position);
            if (response.status === 201) {
                runInAction(() => {
                    this.status = "success";
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
            const response = await this.carLineQueueService.delete(id)
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "success";
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
    loading: observable
});

export default new CarLineStore();