import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import API from '../config/environment';

export default class UpdateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up state
    this.state = {
      _id: '',
      Name: '',
      teacher: '',
      bus: '',
      room: '',
      grade: '',
      mode: '',
      guardian1:'',
      guardian2:'',
      cars: '',
      position: '',
      email: ''
    }
    
    this.state = React.createRef();

  }

  
  onSubmit = (e) => {
    console.log('on submit pressed')
    e.preventDefault()
  
    var studentObject = {
      _id: e.target.elements._id.value,
      name: e.target.elements.Name.value,
      teacher: e.target.elements.teacher.value,
      bus: parseInt(e.target.elements.bus.value),
      room: parseInt(e.target.elements.room.value),
      grade: parseInt(e.target.elements.grade.value),
      mode: e.target.elements.mode.value,
      guardians: [e.target.elements.guardian2.value,e.target.elements.guardian1.value],
      cars: [e.target.elements.cars.value],
      position: parseInt(e.target.elements.position.value),
      waiting: e.target.elements.waiting.value,
      Email: e.target.elements.Email.value

    };

    
    axios.post(API.BASE_URL + '/all', studentObject)
      .then(res => console.log(res.data));

  }





  render() {
    console.log("in create student")
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      <Form.Group controlId="_id">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="number"
            name="_id"
            placeholder="_id"/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Student name</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            placeholder="studentname"/>
        </Form.Group>

        <Form.Group controlId="teacher">
          <Form.Label>teacher</Form.Label>
          <Form.Control
            type="text"
            name="teacher"
            placeholder="teacher" />
        </Form.Group>

        <Form.Group controlId="bus">
          <Form.Label>bus</Form.Label>
          <Form.Control
            type="text"
            name="bus"
            placeholder="bus" />
        </Form.Group>

        <Form.Group controlId="room">
          <Form.Label>Class room</Form.Label>
          <Form.Control
            type="number"
            name="room"
            placeholder="room" />
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>grade</Form.Label>
          <Form.Control
            type="number"
            name="grade"
            placeholder="grade"/>
        </Form.Group>

        <Form.Group controlId="mode">
          <Form.Label>mode</Form.Label>
          <Form.Control
            type="text"
            name="mode"
            placeholder="mode" />
        </Form.Group>

        <Form.Group controlId="guardian1">
          <Form.Label>Gaurdian one</Form.Label>
          <Form.Control
            type="text"
            name="guardian1"
            placeholder="guardian1" />
        </Form.Group>

        <Form.Group controlId="guardian2">
          <Form.Label>Gaurdian two</Form.Label>
          <Form.Control
            type="text"
            name="guardian2"
            placeholder="guardian2" />
        </Form.Group>

        <Form.Group controlId="cars">
          <Form.Label>cars</Form.Label>
          <Form.Control
            type="text"
            name="cars"
            placeholder="cars" />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>position</Form.Label>
          <Form.Control
            type="number"
            name="position"
            placeholder="position" />
        </Form.Group>
        
        <Form.Group controlId="waiting">
          <Form.Label>waiting</Form.Label>
          <Form.Control
            type="text"
            name="waiting"
            placeholder="waiting" />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="Email"
            name="Email"
            placeholder="Email"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}