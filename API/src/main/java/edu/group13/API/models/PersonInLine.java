package edu.group13.API.models;

  import org.springframework.data.annotation.Id;
  import org.springframework.data.annotation.PersistenceConstructor;
  import org.springframework.data.mongodb.core.mapping.Document;

/*
This is basically the same as a student model but it connects to the student line collection.  It is meant to represent a
car/parent waiting in a queue.  So in this collection the position and waiting fields are important to keep
in order.
*/

//this is the line that makes it connect to a different collection
@Document(collection = "Car-line")
public class PersonInLine {

  @Id
  String _id;
  public PersonInLine set_id(String _id) {
    this._id = _id;
    return this;
  }
  public String get_id() {
    return this._id;
  }

  String name;
  public PersonInLine setName(String name) {
    this.name = name;
    return this;
  }
  public String getName() {
    return this.name;
  }

  int grade;
  public PersonInLine setGrade(int grade) {
    this.grade = grade;
    return this;
  }
  public int getGrade() {
    return this.grade;
  }

  int room;
  public PersonInLine setRoom(int room) {
    this.room = room;
    return this;
  }
  public int getRoom() {
    return this.room;
  }

  String[] cars;
  public PersonInLine setCars(String[] cars) {
    this.cars = cars;
    return this;
  }
  public String[] getCars() {
    return this.cars;
  }

  String[] guardians;
  public PersonInLine setGuardians(String[] guardians) {
    this.guardians = guardians;
    return this;
  }
  public String[] getGuardians() {
    return this.guardians;
  }

  String teacher;
  public PersonInLine setTeacher(String teacher) {
    this.teacher = teacher;
    return this;
  }
  public String getTeacher() {
    return this.teacher;
  }

  int position;
  public PersonInLine setPosition(int position) {
    this.position = position;
    return this;
  }
  public int getPosition() {
    return this.position;
  }

  boolean waiting;
  public PersonInLine setWaiting(boolean waiting) {
    this.waiting = waiting;
    return this;
  }
  public boolean getWaiting() {
    return this.waiting;
  }

  public PersonInLine() {}
  public PersonInLine(String name,
                 int grade,
                 int room,
                 String[] cars,
                 String[] guardians,
                 String teacher,
                 int position,
                 boolean waiting
  ) {
    this.name = name;
    this.grade = grade;
    this.room = room;
    this.cars = cars;
    this.guardians = guardians;
    this.teacher = teacher;
    this.position = position;
    this.waiting = waiting;
  }

  //create a PersonInLine from Student data
  public PersonInLine(Student student) {
    this._id = student._id;
    this.teacher = student.teacher;
    this.name = student.name;
    this.grade = student.grade;
    this.room = student.room;
    this.cars = student.cars;
    this.guardians = student.guardians;
    this.position = student.position;
    this.waiting = student.waiting;
  }
}
