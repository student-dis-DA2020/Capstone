package edu.group13.API.repositories;

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
public interface StudentsAllRepository extends MongoRepository<Student, String>{
    Student findBy_id(String _id);

    //these work without an implementation because spring boot infers their function
    //based on the name of the method and its parameter
    List<Student> findByTeacher(@Param("teacher") String teacher);
    List<Student> findByBus(@Param("bus") int bus);
    List<Student> findByMode(@Param("mode") String mode);
}
