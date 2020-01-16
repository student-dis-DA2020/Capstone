package edu.group13.API.controllers;

import edu.group13.API.models.LineStudent;
import edu.group13.API.models.Student;

import edu.group13.API.repositories.StudentsAllRepository;
import edu.group13.API.repositories.StudentsLineRepository;
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
    //collection of cars/parents currently in the line
    @Autowired
    private StudentsLineRepository studentsLineRepository;

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

    //get all students currently in the carline
    @RequestMapping(value = "/line", method = RequestMethod.GET)
    public ResponseEntity<?> getAllStudentsInLine() {
        List<LineStudent> students = studentsLineRepository.findAll();
        if (students == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(students, HttpStatus.OK);
        }
    }

    //add a student to the carline
    @RequestMapping(value = "/line/{_id}", method = RequestMethod.POST)
    public ResponseEntity<?> addStudentToLine(@PathVariable("_id") String _id) {
        Student student = studentsAllRepository.findBy_id(_id);
        LineStudent lineStudent = new LineStudent(student);
        return new ResponseEntity<>(studentsLineRepository.save(lineStudent), HttpStatus.CREATED);
    }

    //add a student to the carline with position in line
    @RequestMapping(value = "/line/{_id}/{position}", method = RequestMethod.POST)
    public ResponseEntity<?> addStudentToLineWithPosition(@PathVariable("_id") String _id,
                                                          @PathVariable("position") int position) {
        Student student = studentsAllRepository.findBy_id(_id);
        LineStudent lineStudent = new LineStudent(student)
                                        .setPosition(position);
        return new ResponseEntity<>(studentsLineRepository.save(lineStudent), HttpStatus.CREATED);
    }

    //change status of linestudents waiting status
    @RequestMapping(value = "/line/{_id}/changewaiting", method = RequestMethod.PUT)
    public ResponseEntity<?> changeWaitingStatus(@PathVariable("_id") String _id) {
        LineStudent lineStudent = studentsLineRepository.findBy_id(_id);
        lineStudent.setWaiting(!lineStudent.getWaiting());
        return new ResponseEntity<>(studentsLineRepository.save(lineStudent), HttpStatus.CREATED);
    }


    //remove a student from the carline collection (i.e. they have been picked up)
    @RequestMapping(value = "/line/{_id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteStudentFromLine(@PathVariable("_id") String _id) {
        studentsLineRepository.delete(studentsLineRepository.findBy_id(_id));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //clear the entire carline
    @RequestMapping(value = "/line", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteLine() {
        studentsLineRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

