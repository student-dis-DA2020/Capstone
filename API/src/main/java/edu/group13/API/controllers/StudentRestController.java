package edu.group13.API.controllers;

import edu.group13.API.models.Mail;
import edu.group13.API.models.Student;

import edu.group13.API.repositories.StudentsAllRepository;
import edu.group13.API.services.MailService;
import edu.group13.API.services.MailServiceImplementation;
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
    @Autowired
    private MailServiceImplementation mailService;

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
        } else { return new ResponseEntity<>(student, HttpStatus.OK);
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

    //get students by teacher
    @RequestMapping(value = "/all/searchByTeacher", method = RequestMethod.GET)
    public ResponseEntity<?> searchByTeacher(@RequestParam("teacher") String teacher) {
        List<Student> students = studentsAllRepository.findByTeacher(teacher);
        if (students == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(students, HttpStatus.OK);
    }


    //get students by bus number
    @RequestMapping(value = "/all/searchByBus", method = RequestMethod.GET)
    public ResponseEntity<?> searchByBus(@RequestParam("bus") int bus) {
        List<Student> students = studentsAllRepository.findByBus(bus);
        if (students == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(students, HttpStatus.OK);
    }


    //get students by teacher
    @RequestMapping(value = "/all/searchByMode", method = RequestMethod.GET)
    public ResponseEntity<?> searchByMode(@RequestParam("mode") String mode) {
        List<Student> students = studentsAllRepository.findByMode(mode);
        if (students == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    //sends a pickup notification to the email address of the student
    @RequestMapping(value = "/sendEmail/{_id}", method = RequestMethod.PUT)
    public ResponseEntity<?> sendEmail(@PathVariable("_id") String _id) {
        Student student = studentsAllRepository.findBy_id(_id);
        String emailAddress = student.getEmail();
        if (student == null || emailAddress == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        String mode = student.getMode();
        Mail mail = new Mail();
        mail.setMailFrom("Student.dis.DA2020@gmail.com");
        mail.setMailTo(emailAddress);
        mail.setMailSubject("Your child has been dismissed");
        mail.setMailContent("Your child has just been sent home by " + mode +
                " today.  You are receiving this message because you opted in to dismissal notifications.  " +
                "Have a great day!");

        mailService.sendEmail(mail);

        return new ResponseEntity<>(student, HttpStatus.OK);
    }

}

