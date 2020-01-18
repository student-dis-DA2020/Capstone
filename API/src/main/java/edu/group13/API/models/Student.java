package edu.group13.API.models;

import org.springframework.data.mongodb.core.mapping.Document;

/*
This model is for the main student entity type that is in  that contains
info on every student in the school
 */

@Document(collection = "Students-all")
public class Student extends StudentAbstract {
}
