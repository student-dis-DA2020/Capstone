package com.csce4623.carline.models;

import org.springframework.data.mongodb.core.mapping.Document;

/*
This model is for the entity type that is in the refernce database that contains
info on every student in the school for reference
 */

@Document(collection = "Students-all")
public class Student extends StudentAbstract {
}
