import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

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

    // State
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/student-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>





      <Form.Group controlId="ID">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="number"
            name="ID"
            value={this.state.ID}
            onChange={this.handleChange}
            placeholder="ID"/>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Student name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="studentname"/>
        </Form.Group>

        <Form.Group controlId="teacher">
          <Form.Label>teacher</Form.Label>
          <Form.Control
            type="text"
            name="teacher"
            value={this.state.teacher}
            onChange={this.handleChange}
            placeholder="teacher" />
        </Form.Group>

        <Form.Group controlId="bus">
          <Form.Label>bus</Form.Label>
          <Form.Control
            type="text"
            name="bus"
            value={this.state.bus}
            onChange={this.handleChange}
            placeholder="bus" />
        </Form.Group>

        <Form.Group controlId="room">
          <Form.Label>Class room</Form.Label>
          <Form.Control
            type="number"
            name="room"
            value={this.state.room}
            onChange={this.handleChange}
            placeholder="room" />
        </Form.Group>

        <Form.Group controlId="grade">
          <Form.Label>grade</Form.Label>
          <Form.Control
            type="number"
            name="grade"
            value={this.state.grade}
            onChange={this.handleChange}
            placeholder="grade" />
        </Form.Group>

        <Form.Group controlId="mode">
          <Form.Label>mode</Form.Label>
          <Form.Control
            type="text"
            name="mode"
            value={this.state.mode}
            onChange={this.handleChange}
            placeholder="mode" />
        </Form.Group>

        <Form.Group controlId="gaurdians">
          <Form.Label>Gaurdians</Form.Label>
          <Form.Control
            type="text"
            name="gaurdians"
            value={this.state.guardians}
            onChange={this.handleChange}
            placeholder="gaurdians" />
        </Form.Group>

        <Form.Group controlId="cars">
          <Form.Label>cars</Form.Label>
          <Form.Control
            type="text"
            name="cars"
            value={this.state.cars}
            onChange={this.handleChange}
            placeholder="cars" />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>position</Form.Label>
          <Form.Control
            type="number"
            name="position"
            value={this.state.position}
            onChange={this.handleChange}
            placeholder="position" />
        </Form.Group>
        
        <Form.Group controlId="waiting">
          <Form.Label>waiting</Form.Label>
          <Form.Control
            type="text"
            name="waiting"
            value={this.state.waiting}
            onChange={this.handleChange}
            placeholder="waiting" />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="Email"
            name="Email"
            value={this.state.Email}
            onChange={this.handleChange}
            placeholder="Email"/>
        </Form.Group>




        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}