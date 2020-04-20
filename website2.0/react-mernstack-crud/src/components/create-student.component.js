import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import API from '../config/environment';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentTeacher = this.onChangeStudentTeacher.bind(this);
    this.onChangeStudentBus = this.onChangeStudentBus.bind(this);
    this.onChangeStudentRoom = this.onChangeStudentRoom.bind(this);
    this.onChangeStudentGrade = this.onChangeStudentGrade.bind(this);
    this.onChangeStudentMode = this.onChangeStudentMode.bind(this);
    this.onChangeStudentGaurdians = this.onChangeStudentGaurdians.bind(this);
    this.onChangeStudentCars = this.onChangeStudentCars.bind(this);
    this.onChangeStudentPosition = this.onChangeStudentPosition.bind(this);
    this.onChangeStudentWaiting = this.onChangeStudentWaiting.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    // Setting up state
    this.state = {
      _id: '',
      Name: '',
      teacher: '',
      bus: '',
      room: '',
      grade: '',
      mode: '',
      gaurdians: ['',''],
      cars: '',
      position: '',
      email: ''
    }
  }

  onChangeStudentID(e) {
    this.setState({ _id: e.target.value })
  }

  onChangeStudentName(e) {
    this.setState({ Name: e.target.value })
  }

  onChangeStudentTeacher(e) {
    this.setState({ teacher: e.target.value })
  }

  onChangeStudentBus(e) {
    this.setState({ bus: e.target.value })
  }
  onChangeStudentRoom(e) {
    this.setState({ room: e.target.value })
  }
  onChangeStudentGrade(e) {
    this.setState({ grade: e.target.value })
  }
  onChangeStudentMode(e) {
    this.setState({ mode: e.target.value })
  }
  onChangeStudentGaurdians(e) {
    this.setState({ guardians: e.target.value })
  }
  onChangeStudentCars(e) {
    this.setState({ cars: e.target.value })
  }
  onChangeStudentPosition(e) {
    this.setState({ position: e.target.value })
  }
  
  onChangeStudentWaiting(e) {
    this.setState({ waiting: e.target.value })
  }
  onChangeStudentEmail(e) {
    this.setState({ Email: e.target.value })
  }
  
  onSubmit(e) {
    e.preventDefault()




    const studentObject = {
      _id: this.state.defaultValue,
      Name: this.state.defaultValue,
      teacher: this.state.defaultValue,
      bus: this.state.defaultValue,
      room: this.state.defaultValue,
      grade: this.state.defaultValue,
      mode: this.state.defaultValue,
      guardians: this.state.defaultValue,
      cars: this.state.defaultValue,
      position: this.state.defaultValue,
      waiting: this.state.defaultValue,
      Email: this.state.defaultValue

    };


    axios.post(API.BASE_URL + '/all', studentObject)
      .then(res => console.log(res.data));

    this.setState({ 
      _id: '',
      Name: '',
      teacher: '',
      bus: '',
      room: '',
      grade: '',
      mode: '',
      gaurdians: '',
      cars: '',
      position: '',
      email: ''
    
    })
  }





  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>

      <Form.Group controlId="_id">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="number"
            name="_id"
            defaultValue={this.state._id}
            onChange={this.handleChange}
            placeholder="_id"/>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Student name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={this.state.name}
            onChange={this.handleChange}
            placeholder="studentname"/>
        </Form.Group>

        <Form.Group controlId="teacher">
          <Form.Label>teacher</Form.Label>
          <Form.Control
            type="text"
            name="teacher"
            defaultValue={this.state.teacher}
            onChange={this.handleChange}
            placeholder="teacher" />
        </Form.Group>

        <Form.Group controlId="bus">
          <Form.Label>bus</Form.Label>
          <Form.Control
            type="text"
            name="bus"
            defaultValue={this.state.bus}
            onChange={this.handleChange}
            placeholder="bus" />
        </Form.Group>

        <Form.Group controlId="room">
          <Form.Label>Class room</Form.Label>
          <Form.Control
            type="number"
            name="room"
            defaultValue={this.state.room}
            onChange={this.handleChange}
            placeholder="room" />
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>grade</Form.Label>
          <Form.Control
            type="number"
            name="grade"
            defaultValue={this.state.grade}
            onChange={this.handleChange}
            placeholder="grade"/>
        </Form.Group>

        <Form.Group controlId="mode">
          <Form.Label>mode</Form.Label>
          <Form.Control
            type="text"
            name="mode"
            defaultValue={this.state.mode}
            onChange={this.handleChange}
            placeholder="mode" />
        </Form.Group>

        <Form.Group controlId="gaurdians">
          <Form.Label>Gaurdians</Form.Label>
          <Form.Control
            type="text"
            name="gaurdians"
            defaultValue={this.state.guardians}
            onChange={this.handleChange}
            placeholder="gaurdians" />
        </Form.Group>

        <Form.Group controlId="cars">
          <Form.Label>cars</Form.Label>
          <Form.Control
            type="text"
            name="cars"
            defaultValue={this.state.cars}
            onChange={this.handleChange}
            placeholder="cars" />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>position</Form.Label>
          <Form.Control
            type="number"
            name="position"
            defaultValue={this.state.position}
            onChange={this.handleChange}
            placeholder="position" />
        </Form.Group>
        
        <Form.Group controlId="waiting">
          <Form.Label>waiting</Form.Label>
          <Form.Control
            type="text"
            name="waiting"
            defaultValue={this.state.waiting}
            onChange={this.handleChange}
            placeholder="waiting" />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="Email"
            name="Email"
            defaultValue={this.state.Email}
            onChange={this.handleChange}
            placeholder="Email"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}