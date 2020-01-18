package edu.group13.API.models;

import org.springframework.data.annotation.Id;

abstract class StudentAbstract {
    @Id
    String _id;
    public StudentAbstract set_id(String _id) {
        this._id = _id;
        return this;
    }
    public String get_id() {
        return this._id;
    }

    String name;
    public StudentAbstract setName(String name) {
        this.name = name;
        return this;
    }
    public String getName() {
        return this.name;
    }

    int grade;
    public StudentAbstract setGrade(int grade) {
        this.grade = grade;
        return this;
    }
    public int getGrade() {
        return this.grade;
    }

    int room;
    public StudentAbstract setRoom(int room) {
        this.room = room;
        return this;
    }
    public int getRoom() {
        return this.room;
    }

    String[] cars;
    public StudentAbstract setCars(String[] cars) {
        this.cars = cars;
        return this;
    }
    public String[] getCars() {
        return this.cars;
    }

    String teacher;
    public StudentAbstract setTeacher(String teacher) {
        this.teacher = teacher;
        return this;
    }
    public String getTeacher() {
        return this.teacher;
    }

    int position;
    public StudentAbstract setPosition(int position) {
        this.position = position;
        return this;
    }
    public int getPosition() {
        return this.position;
    }

    boolean waiting;
    public StudentAbstract setWaiting(boolean waiting) {
        this.waiting = waiting;
        return this;
    }
    public boolean getWaiting() {
        return this.waiting;
    }



    public StudentAbstract() {}
    public StudentAbstract(String name,
                           int grade,
                           int room,
                           String[] cars,
                           String teacher,
                           int position,
                           boolean waiting
                           ) {
        this.name = name;
        this.grade = grade;
        this.room = room;
        this.cars = cars;
        this.teacher = teacher;
        this.position = position;
        this.waiting = waiting;
    }

}
