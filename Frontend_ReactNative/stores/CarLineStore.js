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
    maxPosition = 0;

    updateQueueAsync = async () => {
        try{
            const data = await this.carLineQueueService.getAll();
            //sort by position in queue
            this.carLineData.cars = data;
            let sortedArr = data.sort(
                (a, b) => (a.position > b.position) ? 1 : -1
            );
            //if the queue is not empty update the max position
            if (sortedArr.length > 0) {
                this.maxPosition = sortedArr[sortedArr.length - 1].position
            }
            this.loading = false;
        }catch (error) {
            this.status = "error";
        }
    }

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
                //if the queue is not empty update the max position
                if (sortedArr.length > 0) {
                    this.maxPosition = sortedArr[sortedArr.length - 1].position
                }
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
            const response = await this.carLineQueueService.postWithPosition(id, position);
            runInAction(() => {
                this.status = "success";
                this.loading = false;
                this.updateQueueAsync();
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }

    };

    deleteCarAsync = async (id) => {
        try {
            const response = await this.carLineQueueService.delete(id)
            runInAction(() => {
                this.status = "success";
                this.loading = false;
                this.updateQueueAsync();
            })
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