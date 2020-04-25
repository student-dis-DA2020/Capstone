package edu.group13.API.repositories;

import edu.group13.API.models.Dismissal;
import edu.group13.API.models.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/*
This repository allows for interaction with the collection containing data for
all students in the database
 */

@RepositoryRestResource
public interface DismissalsRepository extends MongoRepository<Dismissal, String> {
    Dismissal findBy_id(String _id);
}
