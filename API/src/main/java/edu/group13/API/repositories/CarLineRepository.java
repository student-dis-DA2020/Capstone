package edu.group13.API.repositories;

  import edu.group13.API.models.PersonInLine;
  import org.springframework.data.mongodb.repository.MongoRepository;
  import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/*
This repository allows for interaction with the collection representing the car line queue
 */

@RepositoryRestResource
public interface CarLineRepository extends MongoRepository<PersonInLine, String>{
    PersonInLine findBy_id(String _id);
}
