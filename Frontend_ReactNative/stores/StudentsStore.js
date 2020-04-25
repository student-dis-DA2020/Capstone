import { observable, runInAction, decorate, action } from 'mobx';
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
            this.loading = true;
            const data = await this.studentsService.getAll();
            runInAction(() => {
                this.studentsData.students = data;
                this.loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };

    getStudentsByTeacher = async (teacher) => {
        try {
            this.loading = true;
            const data = await this.studentsService.getByTeacher(teacher);
            runInAction(() => {
                this.studentsData.class = data;
                this.loading = false;
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
    loading: observable,
    getAllStudents: action,
    getStudentsByTeacher: action
});

export default new StudentsStore();