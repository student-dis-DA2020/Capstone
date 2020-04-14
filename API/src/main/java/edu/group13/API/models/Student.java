package edu.group13.API.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Students-all")
public class Student {

    @Id
    String _id;
    public Student set_id(String _id) {
        this._id = _id;
        return this;
    }
    public String get_id() {
        return this._id;
    }

    String name;
    public Student setName(String name) {
        this.name = name;
        return this;
    }
    public String getName() {
        return this.name;
    }

    int grade;
    public Student setGrade(int grade) {
        this.grade = grade;
        return this;
    }
    public int getGrade() {
        return this.grade;
    }

    int room;
    public Student setRoom(int room) {
        this.room = room;
        return this;
    }
    public int getRoom() {
        return this.room;
    }

    String[] cars;
    public Student setCars(String[] cars) {
        this.cars = cars;
        return this;
    }
    public String[] getCars() {
        return this.cars;
    }

    String[] guardians;
    public Student setGuardians(String[] guardians) {
        this.guardians = guardians;
        return this;
    }
    public String[] getGuardians() {
        return this.guardians;
    }

    String teacher;
    public Student setTeacher(String teacher) {
        this.teacher = teacher;
        return this;
    }
    public String getTeacher() {
        return this.teacher;
    }

    int position;
    public Student setPosition(int position) {
        this.position = position;
        return this;
    }
    public int getPosition() {
        return this.position;
    }

    int bus;
    public Student setBus(int bus) {
        this.bus = bus;
        return this;
    }
    public int getBus() {
        return this.bus;
    }

    String mode;
    public Student setMode(String mode) {
        this.mode = mode;
        return this;
    }
    public String getMode() {
        return this.mode;
    }

    boolean waiting;
    public Student setWaiting(boolean waiting) {
        this.waiting = waiting;
        return this;
    }
    public boolean getWaiting() {
        return this.waiting;
    }

    String email;
    public Student setEmail(String email) {
        this.email = email;
        return this;
    }
    public String getEmail() {
        return this.email;
    }

    public Student() {}
    public Student(String name,
                       int grade,
                       int room,
                       String[] cars,
                       String[] guardians,
                       String teacher,
                       int position,
                       int bus,
                       String mode,
                       boolean waiting,
                        String email
                       ) {
        this.name = name;
        this.grade = grade;
        this.room = room;
        this.cars = cars;
        this.guardians = guardians;
        this.teacher = teacher;
        this.position = position;
        this.bus = bus;
        this.mode = mode;
        this.waiting = waiting;
        this.email = email;
    }
}
