package edu.group13.API.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

/*
This is basically the same as a student model but it connects to the student line collection.  It is meant to represent a
car/parent waiting in a queue.  So in this collection the position and waiting fields are important to keep
in order.
*/

//this is the line that makes it connect to a different collection
@Document(collection = "Dismissals")
public class Dismissal {

    @Id
    String _id;
    public Dismissal set_id(String _id) {
        this._id = _id;
        return this;
    }
    public String get_id() {
        return this._id;
    }

    String name;
    public Dismissal setName(String name) {
        this.name = name;
        return this;
    }
    public String getName() {
        return this.name;
    }

    String mode;
    public Dismissal setMode(String mode) {
        this.mode = mode;
        return this;
    }
    public String getMode() {
        return this.mode;
    }

    String time;
    public Dismissal setTime(String time) {
        this.time = time;
        return this;
    }
    public String getTime() {
        return this.time;
    }

    public Dismissal() {}
    public Dismissal(String name,
                     String mode,
                     String time
    ) {
        this.name = name;
        this.mode = mode;
        this.time = time;
    }
}
