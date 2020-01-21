package edu.group13.API.models;

  import org.springframework.data.annotation.PersistenceConstructor;
  import org.springframework.data.mongodb.core.mapping.Document;

/*
This is the same as a student model but it connects to the student line collection.  It is meant to represent a
car/parent waiting in a queue.  So in this collection the position and waiting fields are important to keep
in order.
*/

//this is the line that makes it connect to a different collection
@Document(collection = "Car-line")
public class PersonInLine extends StudentAbstract{

  //convert Student to a PersonInLine
  public PersonInLine(Student student) {
    this._id = student._id;
    this.teacher = student.teacher;
    this.name = student.name;
    this.grade = student.grade;
    this.room = student.room;
    this.cars = student.cars;
    this.position = student.position;
    this.waiting = student.waiting;
  }

    public PersonInLine() {
    }
}
