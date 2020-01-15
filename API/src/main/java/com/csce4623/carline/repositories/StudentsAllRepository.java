package com.csce4623.carline.repositories;

  import com.csce4623.carline.models.Student;
  import org.springframework.data.mongodb.repository.MongoRepository;
  import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/*
This repository allows for interaction with the collection containing data for
all students in the database
 */

@RepositoryRestResource
public interface StudentsAllRepository extends MongoRepository<Student, String>{
    Student findBy_id(String _id);
}
