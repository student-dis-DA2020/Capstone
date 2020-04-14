import { observable, runInAction, decorate, action } from 'mobx';
import BusLineService from '../services/BusLineService';

class BusLineStore {
constructor(){
    this.busLineService = new BusLineService();
}
    //an array of all the buses currently in the queue
    buses = [];
    status = "initial";
    loading = true;
    //this is the position value of the last bus in line
    maxPosition = 0;

    //this updates the queue silently without triggering loading animations
    updateQueueAsync = async () => {
        try{
            const data = await this.busLineService.getAll();
            //sort by position in queue
            this.buses = data.sort(
                (a, b) => (a.position > b.position) ? 1 : -1
            );
            //if the queue is not empty update the max position
            if (this.buses.length > 0) {
                this.maxPosition = this.buses[this.buses.length - 1].position
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
    getBusLineQueueAsync = async () => {
        try {
            this.loading = true;
            const data = await this.busLineService.getAll();
            runInAction(() => {
                //sort by position in queue
                this.buses = data.sort(
                    (a, b) => (a.position > b.position) ? 1 : -1
                );
                //if the queue is not empty update the max position
                if (this.buses.length > 0) {
                    this.maxPosition = this.buses[this.buses.length - 1].position
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

    //helper function to find the index of a bus with the given id in the buses array
    findIndexById(id){
        for (var i = 0; i < this.buses.length; i++) {
            if(this.buses[i]._id === id) {
                return i;
            }
        }
        return -1;
    }

    //returns the id of the bus at a particular index in the array
    findIdByIndex = (index) => {
        return this.buses[index]._id;
    }

    //returns the position of the bus in the queue with the given id
    findPositionById = (id) => {
        for (var i = 0; i < this.buses.length; i++) {
            if(this.buses[i]._id === id) {
                return this.buses[i].position;
            }
        }
        return -1;
    }

    //this moves the bus up one place in line
    moveUpAsync = async (id) => {
        try{
            this.updateQueueAsync();
            const indexOfBus = this.findIndexById(id);
            const indexOfBusInFront = this.findIndexById(id) - 1;
            const idOfBusInFront = this.findIdByIndex(indexOfBusInFront);
            const originalPosition = this.findPositionById(id);
            const newPosition = this.findPositionById(idOfBusInFront);
            runInAction( () => {
                if (indexOfBus !== -1 && indexOfBusInFront !== -1) {
                    this.addBusAsync(id, newPosition);
                    this.addBusAsync(idOfBusInFront, originalPosition);
                    this.updateQueueAsync();
                }
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    //this moves the bus back one place in line
    moveDownAsync = async (id) => {
        try{
            this.updateQueueAsync();
            const indexOfBus = this.findIndexById(id);
            const originalPosition = this.findPositionById(id);
            var indexOfBusBehind = this.findIndexById(id) + 1;
            var idOfBusBehind = -1;
            var newPosition = -1;
            //check for index out of bounds error
            if (indexOfBusBehind < this.buses.length) {
                idOfBusBehind = this.findIdByIndex(indexOfBusBehind);
                newPosition = this.findPositionById(idOfBusBehind);
            }else {
                indexOfBusBehind = -1;
            }
            runInAction( () => {
                if (indexOfBus !== -1 && indexOfBusBehind !== -1) {
                    this.addBusAsync(id, newPosition);
                    this.addBusAsync(idOfBusBehind, originalPosition);
                    this.updateQueueAsync();
                }
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }
}

decorate(BusLineStore, {
    buses: observable,
    status: observable,
    loading: observable,
    maxPosition: observable,
    updateQueueAsync: action,
    getBusLineQueueAsync: action,
   // addBusAsync: action,
    //deleteBusAsync: action,
    moveUpAsync: action,
    moveDownAsync: action
});

export default new BusLineStore();