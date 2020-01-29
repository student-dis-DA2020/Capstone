package edu.group13.API.controllers;

import edu.group13.API.models.Student;

import edu.group13.API.repositories.StudentsAllRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
public class StudentRestController {
    //collection of all student data
    @Autowired
    private StudentsAllRepository studentsAllRepository;

    //return list of all students
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<?> getAllStudents() {
        List<Student> students = studentsAllRepository.findAll();
        if (students == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(students, HttpStatus.OK);
        }
    }

    //get specific student by _id
    @RequestMapping(value = "/all/{_id}", method = RequestMethod.GET)
    public ResponseEntity<?> getStudentById(@PathVariable("_id") String _id) {
        Student student = studentsAllRepository.findBy_id(_id);
        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(student, HttpStatus.OK);
        }
    }


    //add a new student to DB
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    public ResponseEntity<?> addStudent(@RequestBody Student student) {
        if (student == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        studentsAllRepository.save(student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }

    //update a student
    @RequestMapping(value = "/all/{_id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateStudent(@RequestBody Student student, @PathVariable("_id") String _id) {
        //check if that student exits
        Student studentFromID = studentsAllRepository.findBy_id(_id);
        if (studentFromID == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        studentsAllRepository.save(student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }


    //delete a student
    @RequestMapping(value = "/all/{_id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteStudent(@PathVariable("_id") String _id) {
        //check if student exists
        Student studentFromID = studentsAllRepository.findBy_id(_id);
        if (studentFromID == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        studentsAllRepository.deleteById(_id);
        return new ResponseEntity<>(studentFromID, HttpStatus.OK);
    }

}

