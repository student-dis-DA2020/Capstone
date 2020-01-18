package edu.group13.API.controllers;

import edu.group13.API.models.Student;

import edu.group13.API.repositories.StudentsAllRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

}

