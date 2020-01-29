package edu.group13.API.controllers;

import edu.group13.API.models.PersonInLine;
import edu.group13.API.repositories.CarLineRepository;
import edu.group13.API.repositories.StudentsAllRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Validated
public class CarLineRestController {

    //collection of student like objects representing the parents currently in the line
    @Autowired
    private CarLineRepository carLineRepository;
    //collection of all student data
    @Autowired
    private StudentsAllRepository studentsAllRepository;

    //get all people currently in the carline
    @RequestMapping(value = "/line", method = RequestMethod.GET)
    public ResponseEntity<?> getAllStudentsInLine() {
        List<PersonInLine> students = carLineRepository.findAll();
        if (students == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(students, HttpStatus.OK);
        }
    }

    //add a person in line to the carline
    @RequestMapping(value = "/line/{_id}", method = RequestMethod.POST)
    public ResponseEntity<?> addStudentToLine(@PathVariable("_id") String _id) {
        PersonInLine personInLine = new PersonInLine(studentsAllRepository.findBy_id(_id));
        return new ResponseEntity<>(carLineRepository.save(personInLine), HttpStatus.CREATED);
    }

    //add a person and their student data to the carline with position in line
    @RequestMapping(value = "/line/{_id}/{position}", method = RequestMethod.POST)
    public ResponseEntity<?> addStudentToLineWithPosition(@PathVariable("_id") String _id,
                                                          @PathVariable("position") int position) {
        PersonInLine personInLine = new PersonInLine(studentsAllRepository.findBy_id(_id));
        personInLine.setPosition(position);
        return new ResponseEntity<>(carLineRepository.save(personInLine), HttpStatus.CREATED);
    }

    //change status of person in line's student's waiting status
    @RequestMapping(value = "/line/{_id}/changewaiting", method = RequestMethod.PUT)
    public ResponseEntity<?> changeWaitingStatus(@PathVariable("_id") String _id) {
        PersonInLine personInLine = carLineRepository.findBy_id(_id);
        personInLine.setWaiting(!personInLine.getWaiting());
        return new ResponseEntity<>(carLineRepository.save(personInLine), HttpStatus.CREATED);
    }


    //remove a person from line (i.e. the student has been picked up)
    @RequestMapping(value = "/line/{_id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteStudentFromLine(@PathVariable("_id") String _id) {
        carLineRepository.delete(carLineRepository.findBy_id(_id));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //clear the entire carline
    @RequestMapping(value = "/line", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteLine() {
        carLineRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
