import { observable, runInAction, decorate, action } from 'mobx';
import CarLineQueueService from '../services/CarLineQueueService';

class CarLineStore {
constructor(){
    this.carLineQueueService = new CarLineQueueService();
}
    //an array of all the cars currently in the queue
    cars = [];
    status = "initial";
    loading = true;
    //this is the position value of the last car in line
    maxPosition = 0;

    //this updates the queue silently without triggering loading animations
    updateQueueAsync = async () => {
        try{
            const data = await this.carLineQueueService.getAll();
            //sort by position in queue
            this.cars = data.sort(
                (a, b) => (a.position > b.position) ? 1 : -1
            );
            //if the queue is not empty update the max position
            if (this.cars.length > 0) {
                this.maxPosition = this.cars[this.cars.length - 1].position
            }else {
                this.maxPosition = 0;
            }
            this.loading = false;
        }catch (error) {
            this.status = "error";
        }
    }

    //does basically the same thing as updateQueueAsync but triggers the loading animation.
    //Used when components are first mounted.  TODO: think of a better way...
    getCarLineQueueAsync = async () => {
        try {
            this.loading = true;
            const data = await this.carLineQueueService.getAll();
            runInAction(() => {
                //sort by position in queue
                this.cars = data.sort(
                    (a, b) => (a.position > b.position) ? 1 : -1
                );
                //if the queue is not empty update the max position
                if (this.cars.length > 0) {
                    this.maxPosition = this.cars[this.cars.length - 1].position
                }else {
                    this.maxPosition = 0;
                }
                this.loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    //adds a car to the queue at the given position
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

    //helper function to find the index of a car with the given id in the cars array
    findIndexById(id){
        for (var i = 0; i < this.cars.length; i++) {
            if(this.cars[i]._id === id) {
                return i;
            }
        }
        return -1;
    }

    //returns the id of the car at a particular index in the array
    findIdByIndex = (index) => {
        return this.cars[index]._id;
    }

    //returns the position of the car in the queue with the given id
    findPositionById = (id) => {
        for (var i = 0; i < this.cars.length; i++) {
            if(this.cars[i]._id === id) {
                return this.cars[i].position;
            }
        }
        return -1;
    }

    //this moves the car up one place in line
    moveUpAsync = async (id) => {
        try{
            this.updateQueueAsync();
            const indexOfCar = this.findIndexById(id);
            const indexOfCarInFront = this.findIndexById(id) - 1;
            const idOfCarInFront = this.findIdByIndex(indexOfCarInFront);
            const originalPosition = this.findPositionById(id);
            const newPosition = this.findPositionById(idOfCarInFront);
            runInAction( () => {
                if (indexOfCar !== -1 && indexOfCarInFront !== -1) {
                    this.addCarAsync(id, newPosition);
                    this.addCarAsync(idOfCarInFront, originalPosition);
                    this.updateQueueAsync();
                }
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    //this moves the car back one place in line
    moveDownAsync = async (id) => {
        try{
            this.updateQueueAsync();
            const indexOfCar = this.findIndexById(id);
            const originalPosition = this.findPositionById(id);
            var indexOfCarBehind = this.findIndexById(id) + 1;
            var idOfCarBehind = -1;
            var newPosition = -1;
            //check for index out of bounds error
            if (indexOfCarBehind < this.cars.length) {
                idOfCarBehind = this.findIdByIndex(indexOfCarBehind);
                newPosition = this.findPositionById(idOfCarBehind);
            }else {
                indexOfCarBehind = -1;
            }
            runInAction( () => {
                if (indexOfCar !== -1 && indexOfCarBehind !== -1) {
                    this.addCarAsync(id, newPosition);
                    this.addCarAsync(idOfCarBehind, originalPosition);
                    this.updateQueueAsync();
                }
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    //this changes the waiting status of the car
    changeWaitingStatusAsync = async (id) => {
        try {
            const response = await this.carLineQueueService.changeWaitingStatus(id)
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
    }

    //sends a notification email (if address is available) to parent of student
    sendNotificationEmailAsync = async (id) => {
        try {
            const response = await this.carLineQueueService.sendNotificationEmail(id)
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
    }
}

decorate(CarLineStore, {
    cars: observable,
    status: observable,
    loading: observable,
    maxPosition: observable,
    updateQueueAsync: action,
    getCarLineQueueAsync: action,
    addCarAsync: action,
    deleteCarAsync: action,
    moveUpAsync: action,
    moveDownAsync: action,
    changeWaitingStatus: action,
    sendNotificationEmailAsync: action
});

export default new CarLineStore();