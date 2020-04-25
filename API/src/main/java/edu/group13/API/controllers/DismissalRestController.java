package edu.group13.API.controllers;

import edu.group13.API.models.Dismissal;
import edu.group13.API.models.Student;

import edu.group13.API.repositories.DismissalsRepository;
import edu.group13.API.repositories.StudentsAllRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@RestController
@Validated
public class DismissalRestController {
    //collection of all student data
    @Autowired
    private DismissalsRepository dismissalsRepository;

    @Autowired
    private StudentsAllRepository studentsAllRepository;

    //return list of all dismissals
    @RequestMapping(value = "/dismissal", method = RequestMethod.GET)
    public ResponseEntity<?> getAllDismissals() {
        List<Dismissal> dismissals = dismissalsRepository.findAll();
        if (dismissals == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(dismissals, HttpStatus.OK);
        }
    }

    //get specific student by _id
    @RequestMapping(value = "/dismissal/{_id}", method = RequestMethod.POST)
    public ResponseEntity<?> dismissStudentById(@PathVariable("_id") String _id) {
        Student student = studentsAllRepository.findBy_id(_id);
        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
            Dismissal dismissal = new Dismissal();
            dismissal.setName(student.getName())
                    .setMode(student.getMode())
                    .setTime(timeStamp);
            dismissalsRepository.save(dismissal);
            return new ResponseEntity<>(dismissal, HttpStatus.OK);
        }
    }
}

