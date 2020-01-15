package com.csce4623.carline.repositories;

  import com.csce4623.carline.models.LineStudent;
  import org.springframework.data.mongodb.repository.MongoRepository;
  import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/*
This repository allows for interaction with the collection containing all the cars
in the car-line
 */

@RepositoryRestResource
public interface StudentsLineRepository extends MongoRepository<LineStudent, String>{
    LineStudent findBy_id(String _id);
}
