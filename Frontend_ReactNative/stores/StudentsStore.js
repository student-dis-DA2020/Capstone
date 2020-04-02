import { observable, runInAction, decorate } from 'mobx';
import StudentsService from '../services/StudentsService';

class StudentsStore {
constructor(){
    this.studentsService = new StudentsService();
}
    studentsData = {
        students: [],
        class: []
    };
    status = "initial";
    loading = true;

    getAllStudents = async () => {
        try {
            const data = await this.studentsService.getAll();
            runInAction(() => {
                this.studentsData.students = data;
                loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    getStudentsByTeacher = async (teacher) => {
        try {
            const data = await this.studentsService.getByTeacher(teacher);
            console.log(data);
            runInAction(() => {
                this.studentsData.class = data;
                loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }

    };

}

decorate(StudentsStore, {
    studentsData: observable,
    status: observable,
    loading: observable
});

export default new StudentsStore();